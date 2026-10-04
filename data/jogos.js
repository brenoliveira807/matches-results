// data/jogos.js — camada de dados (estrutura JSON-compatível).
// Formato do registro (ver formato_tabela_resultados.md):
//   [Indicador] [Time da casa] [gols] x [gols] [Time visitante] - [Competição]
//   💬 [Comentário da Mídia]
window.JOGOS = {
  "jogos": [
    { "id": 1, "competicao": "amistoso",
      "mandante": "corinthians", "visitante": "the-old-boys",
      "gols_mandante": 2, "gols_visitante": 0,
      "titulo": false,
      "comentario_midia": "Em partida de despedida, Heittor Vinicius, jovem centro-avante da base, marca duas vezes sendo MVP da partida!" },
    { "id": 2, "competicao": "florida-cup",
      "mandante": "corinthians", "visitante": "al-ittihad",
      "gols_mandante": 4, "gols_visitante": 2,
      "titulo": false,
      "comentario_midia": "Apesar do gol contra de Chalobah, Corinthians vence o Al-Ittihad com goleada na estreia da Florida Cup." },
    { "id": 3, "competicao": "florida-cup",
      "mandante": "junior", "visitante": "corinthians",
      "gols_mandante": 1, "gols_visitante": 2,
      "titulo": false,
      "comentario_midia": "Com quase todo elenco formado na base, Corinthians vence o Junior e alcança a liderança na Florida Cup." },
    { "id": 4, "competicao": "florida-cup",
      "mandante": "henan", "visitante": "corinthians",
      "gols_mandante": 1, "gols_visitante": 3,
      "titulo": true,
      "comentario_midia": "Com promessas da base e novas contratações, Corinthians vence a Florida Cup na última rodada contra o time chinês." },
    { "id": 5, "competicao": "brasileirao",
      "mandante": "gremio-novo-horizontino", "visitante": "corinthians",
      "gols_mandante": 1, "gols_visitante": 3,
      "titulo": false,
      "comentario_midia": "Estreia em casa e Dani Olmo leva o Corinthians à sua primeira vitória no Brasileirão." },
    { "id": 6, "competicao": "brasileirao",
      "mandante": "rb-bragantino", "visitante": "corinthians",
      "gols_mandante": 0, "gols_visitante": 1,
      "titulo": false,
      "comentario_midia": "Em partida apertada contra o Bragantino, João Gomes abre o placar e garante vitória fora de casa." },
    { "id": 7, "competicao": "brasileirao",
      "mandante": "corinthians", "visitante": "fortaleza",
      "gols_mandante": 1, "gols_visitante": 0,
      "titulo": false,
      "comentario_midia": "Yuri Alberto marca o gol da partida logo no início e garante vitória em casa pelo campeonato brasileiro." }
  ]
};
