// js/app.js — Projeto Escudos
// Renderização da página a partir dos dados (times/competicoes/jogos) + filtros + estatísticas.
(function () {
  'use strict';

  var TIMES = window.TIMES;
  var COMPETICOES = window.COMPETICOES;
  
  // Carregar jogos: temporada atual (2029) + histórico (2028)
  var JOGOS = window.JOGOS || {};
  var JOGOS_2028 = window.JOGOS_2028 || {};
  
  // Unir todos os jogos e numerar sequencialmente
  var jogosAtual = JOGOS.jogos || [];
  var jogosHistoricos = JOGOS_2028.jogos || [];
  var TODOS_JOGOS = [];
  
  // Adicionar jogos históricos primeiro, depois atuais
  jogosHistoricos.forEach(function (j) { 
    j.id = j.id; // manter IDs originais de 2028
  });
  jogosAtual.forEach(function (j) { 
    if (!j.id || String(j.id).length < 4) j.id = TODOS_JOGOS.length + 1;
    else j.id += 1000; // IDs altos para distinguir temporada atual
  });
  
  TODOS_JOGOS = jogosHistoricos.concat(jogosAtual);
  var JOGOS_UNIDOS = { "jogos": TODOS_JOGOS };

  /* ---------------- helpers ---------------- */
  function escudoUrl(file) {
    return file ? 'assets/escudos/' + file : null;
  }
  function timeById(id) {
    return TIMES.times.find(function (t) { return t.id === id; });
  }
  function competicaoById(id) {
    return COMPETICOES.competicoes.find(function (c) { return c.id === id; });
  }
  function isTreinador(id) {
    return TIMES.treinadores.indexOf(id) !== -1;
  }
  function tipoTimeLabel(tipo) {
    if (tipo === 'selecao') return 'Seleção';
    if (tipo === 'clube') return 'Clube';
    return tipo;
  }

  // Resultado do ponto de vista do treinador (independente de casa/fora).
  function treinadorPOV(jogo) {
    var mandT = isTreinador(jogo.mandante);
    var visitT = isTreinador(jogo.visitante);
    
    // Determinar qual time é do treinador e os gols marcados por ele
    var timeT, golsT;
    if (mandT) {
      // Mandante é do treinador
      timeT = jogo.mandante;
      golsT = jogo.gols_mandante;
    } else if (visitT) {
      // Visitante é do treinador
      timeT = jogo.visitante;
      golsT = jogo.gols_visitante;
    } else {
      // Nenhum time do treinador (amistoso ou terceiros)
      return { resultado: 'E', timeT: null, golsT: 0, golsO: 0 };
    }
    
    // Oponente é o outro time
    var oponente = (mandT) ? jogo.visitante : jogo.mandante;
    var golsO = (mandT) ? jogo.gols_visitante : jogo.gols_mandante;
    
    // Calcular resultado do treinador
    var resultado = golsT > golsO ? 'V' : (golsT < golsO ? 'D' : 'E');
    return { resultado: resultado, timeT: timeT, golsT: golsT, golsO: golsO };
  }

  var INDICATORS = { V: '🟢', E: '⚪', D: '🔴' };
  var RESULT_TITLE = { V: 'Vitória', E: 'Empate', D: 'Derrota' };
  var RESULT_CLASS = { V: 'win', E: 'draw', D: 'loss' };

  function fmtData(iso) {
    var p = String(iso).split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }
  function jogoLabel(jogo) {
    if (!jogo.fase) return null;
    if (jogo.fase === 'ida') return 'Jogo de ida';
    if (jogo.fase === 'volta') return 'Jogo de volta';
    var fase = jogo.fase.split('-')[0]; // primeira palavra
    if (['final', 'semifinal', 'quartas-de-final', 'oitavas-de-final'].indexOf(fase) !== -1) {
      return fase.replace('-', ' ').toUpperCase();
    }
    return 'Jogo único';
  }

  /* ---------------- render: times treinados ---------------- */
  function renderTimes() {
    var cont = document.getElementById('times-grid');
    cont.innerHTML = '';
    TIMES.times.filter(function (t) { return isTreinador(t.id); }).forEach(function (t) {
      var card = el('div', 'myteam');
      card.appendChild(escudoImg(t.escudo, t.nome, 'crest'));
      var info = el('div');
      info.appendChild(el('div', 't-name', t.nome));
      info.appendChild(el('div', 't-kind', tipoTimeLabel(t.tipo)));
      card.appendChild(info);
      cont.appendChild(card);
    });
  }

  /* ---------------- render: resultados ---------------- */
  function buildRecord(jogo) {
    var pov = treinadorPOV(jogo);
    var mandante = timeById(jogo.mandante);
    var visitante = timeById(jogo.visitante);

    var rec = el('article', 'record ' + RESULT_CLASS[pov.resultado]);

    var match = el('div', 'match');

    var ind = el('span', 'indicator', INDICATORS[pov.resultado]);
    ind.title = RESULT_TITLE[pov.resultado];
    match.appendChild(ind);

    var teams = el('div', 'teams');

    var home = el('div', 'side');
    home.appendChild(escudoImg(mandante.escudo, mandante.nome));
    var homeName = el('span', 'name', mandante.nome);
    if (isTreinador(jogo.mandante)) homeName.classList.add('mine');
    home.appendChild(homeName);
    home.appendChild(el('span', 'score', String(jogo.gols_mandante)));
    teams.appendChild(home);

    teams.appendChild(el('span', 'x', 'x'));

    var away = el('div', 'side');
    away.appendChild(el('span', 'score', String(jogo.gols_visitante)));
    var awayName = el('span', 'name', visitante.nome);
    if (isTreinador(jogo.visitante)) awayName.classList.add('mine');
    away.appendChild(awayName);
    away.appendChild(escudoImg(visitante.escudo, visitante.nome));
    teams.appendChild(away);

    match.appendChild(teams);

    var trophy = el('span', 'trophy', '');
    if (jogo.titulo) trophy.appendChild(el('span', 'trophy-inner', '🏆'));
    match.appendChild(trophy);

    rec.appendChild(match);

    var parts = [jogo.fase, jogoLabel(jogo), (jogo.data ? fmtData(jogo.data) : null)]
      .filter(function (p) { return !!p; });
    if (parts.length > 0) {
      var meta = el('div', 'meta');
      parts.forEach(function (p, i) {
        if (i > 0) meta.appendChild(el('span', null, '·'));
        meta.appendChild(el('span', 'chip', p));
      });
      rec.appendChild(meta);
    }

    if (jogo.comentario_midia) {
      var media = el('div', 'media');
      media.appendChild(el('span', null, '💬 '));
      media.appendChild(el('span', 'quote', '\u201C' + jogo.comentario_midia + '\u201D'));
      rec.appendChild(media);
    }

    return rec;
  }

  function renderResultados() {
    var container = document.getElementById('results-list');
    container.innerHTML = '';
    var any = false;

    COMPETICOES.competicoes.forEach(function (comp) {
      if (filterComp !== 'todas' && comp.id !== filterComp) return;

      var jogos = TODOS_JOGOS
        .filter(function (j) { return j.competicao === comp.id; })
        .filter(function (j) {
          if (filterRes === 'todos') return true;
          return treinadorPOV(j).resultado === filterRes;
        })
        .slice()
        .sort(function (a, b) {
          // Ordenar primeiro por fase/título, depois por data/ID
          var fa = a.fase || '', fb = b.fase || '';
          var da = a.data || '', db = b.data || '';
          if (fa === fb) {
            if (da === db) return a.id - b.id;
            return da < db ? -1 : 1;
          }
          return fa < fb ? -1 : 1;
        });

      if (jogos.length === 0) return;
      any = true;

      var section = el('section', 'competition');

      var head = el('div', 'competition-head');
      if (comp.escudo) head.appendChild(escudoImg(comp.escudo, comp.nome, 'crest'));
      else head.appendChild(el('span', 'crest-placeholder', (comp.tipo === 'amistoso' ? '🤝' : '🏆')));
      var headText = el('div');
      headText.appendChild(el('div', 'c-name', comp.nome));
      headText.appendChild(el('div', 'c-meta', comp.tipo));
      head.appendChild(headText);
      section.appendChild(head);

      var records = el('div', 'records');
      jogos.forEach(function (j) { records.appendChild(buildRecord(j)); });
      section.appendChild(records);

      container.appendChild(section);
    });

    var empty = document.getElementById('results-empty');
    if (empty) empty.style.display = any ? 'none' : 'block';
  }

  /* ---------------- filtros ---------------- */
  var filterComp = 'todas';
  var filterRes = 'todos';

  function filterButton(label, value, group) {
    var b = el('button', 'filter-btn', label);
    b.type = 'button';
    var active = (group === 'comp' ? filterComp : filterRes) === value;
    if (active) b.classList.add('active');
    b.addEventListener('click', function () {
      if (group === 'comp') filterComp = value; else filterRes = value;
      renderFilters();
      renderResultados();
    });
    return b;
  }

  function renderFilters() {
    var compBar = document.getElementById('filter-comp');
    compBar.innerHTML = '';
    compBar.appendChild(filterButton('Todas', 'todas', 'comp'));
    COMPETICOES.competicoes.forEach(function (c) {
      compBar.appendChild(filterButton(c.nome, c.id, 'comp'));
    });

    var resBar = document.getElementById('filter-res');
    resBar.innerHTML = '';
    [['Todas', 'todos'], ['Vitórias', 'V'], ['Empates', 'E'], ['Derrotas', 'D']]
      .forEach(function (pair) {
        resBar.appendChild(filterButton(pair[0], pair[1], 'res'));
      });
  }

  /* ---------------- render: estatísticas ---------------- */
  function renderStats() {
    var cont = document.getElementById('stats-grid');
    cont.innerHTML = '';

    // Estatísticas apenas dos jogos da temporada atual (IDs > 999)
    var tempAtual = TODOS_JOGOS.filter(function (j) { 
      return isTreinador(j.mandante) || isTreinador(j.visitante); 
    });

    var v = 0, e = 0, d = 0, gp = 0, gc = 0, titulos = 0;
    tempAtual.forEach(function (j) {
      var pov = treinadorPOV(j);
      if (pov.resultado === 'V') v++;
      else if (pov.resultado === 'E') e++;
      else d++;
      gp += pov.golsT; gc += pov.golsO;
      if (j.titulo) titulos++;
    });

    var saldo = gp - gc;
    var items = [
      ['Jogos', tempAtual.length],
      ['Vitórias', v],
      ['Empates', e],
      ['Derrotas', d],
      ['Gols pró', gp],
      ['Gols contra', gc],
      ['Saldo', (saldo > 0 ? '+' : '') + saldo],
      ['Títulos', titulos]
    ];
    items.forEach(function (it) {
      var s = el('div', 'stat');
      s.appendChild(el('div', 'stat-value', String(it[1])));
      s.appendChild(el('div', 'stat-label', it[0]));
      cont.appendChild(s);
    });
  }

  /* ---------------- init ---------------- */
  function init() {
    var yearEl = document.getElementById('season-year');
    if (yearEl) yearEl.textContent = TIMES.temporada;
    renderTimes();
    renderFilters();
    renderResultados();
    renderStats();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();