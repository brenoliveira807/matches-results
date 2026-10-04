# Projeto Escudos — Futebol

> **Este arquivo é a fonte única de verdade do projeto.** Ele serve de base de contexto para todas as conversas e chats que trabalharem em itens específicos.
> Regra: qualquer decisão nova deve ser registrada na seção 8 (Diário de Decisões) antes de avançar para a implementação.

---

## 1. Objetivo do projeto

Registrar resultados de futebol (clubes e seleções) para permitir:

1. **Consulta histórica** — buscar resultados de jogos por time, competição, temporada, adversário, período.
2. **Análise de estatísticas** — jogos, vitórias, empates, derrotas, gols pró/contra, saldo, artilharia (se disponível), campanhas por temporada.
3. **Consulta visual** — navegação de clubes e seleções com escudos, uniformes e identidades visuais de competições.

## 2. Stack e restrições técnicas

- **Stack definida pelo usuário:** HTML + CSS + **JavaScript mínimo** (CSS e JS só quando fizerem sentido).
- **Compatibilidade:** navegadores comuns (Google Chrome como referência). Sem frameworks, sem build, sem dependências externas.
- **Dados:** arquivos **JSON** como camada de dados editável manualmente, carregados pela página. Para funcionar offline via `file://` (sem servidor), os dados podem ser expostos como módulo `.js` com estrutura JSON-compatível (ver decisão pendente 5).
- **Tensão técnica (RESOLVIDA):** JavaScript mínimo **aprovado** para leitura de dados, cálculo de estatísticas e filtragem dinâmica.
- **Referência visual:** template **html5up-dimension** (HTML5 UP) como base de estilo — estética dark, texto branco, títulos em caixa alta com espaçamento largo e bordas finas brancas.

## 3. Repositório de imagens (escudos)

- **Local:** `C:\Users\Breno Oliveira\Desktop\escudos` (pasta do usuário, na Área de Trabalho).
- **Permissões atuais:** leitura OK; **gravação não liberada** (se precisar gravar, pedir `request_read_write_access`).
- **Volume:** mais de ~500 arquivos. Formatos: **webp** (maioria), **png**, ocasionalmente **svg**.
- **Convenção de nomes (usar como referência para associar a times/competições):**

| Categoria | Padrão de nome | Exemplos |
|---|---|---|
| Clube | `<slug>-logo-footylogos-320.webp` (ou `-1200.webp`) | `ac-milan-logo-footylogos-320.webp`, `arsenal-...`, `al-hilal-...` |
| Seleção | `<pais>-national-team-logo-footylogos-320.webp` | `argentina-national-team-logo-...`, `albania-...` |
| Competição | `<slug>-logo-...` | `bundesliga-...`, `3-liga-...`, `allsvenskan-...`, `afc-champions-league-elite-...` |
| PNG com hash | `<hash32>_<hash32>.png` ou `<hash>_<hash>_<nome-legível>.png` | `brasileirao-serie-a-footballlogos-org`, `ucl-footylogos-dark`, `premier-league-...` |

- **Atenção — arquivos com hash opaco:** vários PNGs têm nome **inteiramente** em hash (ex.: `02efcd8c44814fe78a6c763149c01d15_e48520694e52b720325823322f1d1cc7.png`) e não identificam o time/competição pelo nome. Se forem usados, exigem **mapeamento manual** (ver decisão pendente 4).
- **Abrangência:** a pasta cobre muitos países/ligas (Brasil, Portugal, Turquia, Espanha, Itália, Oriente Médio, etc.) — o usuário tende a querer **cobertura ampla de ligas**, não só 2 ou 3.

## 4. Proposta de arquitetura (RASCUNHO — ainda não aprovada)

```
workspace/
├── index.html              # início / busca / índice de times e competições
├── times/                  # páginas de detalhe de clube/seleção (1 por time, ou 1 página + seleção)
├── competencias/           # páginas de detalhe de competição
├── temporadas/             # (opcional) visão por temporada/competição
├── css/
│   └── styles.css
├── data/
│   ├── times.json          # clubes + seleções (id, nome, tipo, país, escudo)
│   ├── competencias.json   # ligas e torneios (id, nome, tipo, país, escudo)
│   ├── temporadas.json     # temporada de uma competição (ano, formato, participantes)
│   └── jogos.json          # resultados (id, temporada, data, mandante, visitante, placar, local)
└── PROJETO.md              # este arquivo
```

- **Identidades (IDs):** slugs estáveis em minúsculas com hífen (ex.: `ac-milan`, `brasileirao-serie-a`), iguais aos usados nos nomes dos arquivos de imagem sempre que possível.
- **Imagens:** referenciadas pelos nomes de arquivo da pasta `escudos` (decidir local do site, ver decisão pendente 1).
- **Modelo de dados resumido:**
  - **Time:** `id`, `nome`, `tipo (clube|selecao)`, `pais`, `escudo (arquivo)`, `cores?`, `fundacao?`
  - **Competição:** `id`, `nome`, `tipo (liga|copa|internacional)`, `pais|escopo`, `escudo (arquivo)`
  - **Temporada:** `id`, `competicao`, `ano`/`periodo`, `participantes[]`
  - **Jogo:** `id`, `temporada`, `data`, `mandante`, `visitante`, `gols_mandante`, `gols_visitante`, `rodada?`, `estadio?`

## 5. Estrutura de navegação proposta (RASCUNHO)

- `index.html` → busca de times/competições + listagens com escudos.
- Página de **time** → escudo, dados, temporadas jogadas, tabela de campanha, confrontos diretos, estatísticas de carreira.
- Página de **competição** → escudo, temporadas, campeão de cada ano, estatísticas da competição.
- Página de **temporada** → classificação, resultados por rodada, artilharia (se houver dados).

## 6. Convenções de trabalho

- **Idioma:** sempre PT-BR com o usuário e nos textos visíveis do site.
- **Esta conversa** (hub de contexto) coordena o projeto; as demais conversas tratam itens específicos e **devem se guiar por este arquivo**.
- **Não iniciar construção** (páginas, scripts, dados) sem aprovação explícita do usuário do escopo do item.
- **Ferramentas:** evitar variáveis `$`/`$_` dentro de strings de comando do PowerShell 5.1 (falha anterior de parsing); preferir `list_dir`/`find_files` para inventário de arquivos.
- Imagens: nunca redimensionar/reescrever os originais da pasta `escudos`; usar por referência.

## 7. Decisões pendentes (perguntar ao usuário)

1. **Onde o site vive?** na `workspace` (referenciando imagens com caminho relativo longo para o Desktop) **ou** dentro da pasta `escudos` (exige permissão de escrita)?
2. ~~JavaScript é aceitável?~~ → **APROVADO: (a) sim, mínimo e sem dependências.**
3. **Escopo inicial:** quais competições, países e temporadas entram na primeira versão?
4. **PNGs com hash opaco:** mapear manualmente (qual é o conteúdo de cada um), ignorar, ou descartar do projeto?
5. **Como os resultados serão lançados?** edição manual dos JSONs, ou algum processo de importação?
6. **Nível de estatística** do MVP: mínima (V/E/D, gols, saldo) ou completa (desempenho casa/fora, sequência, médias)?

## 8. Diário de Decisões

| Data | Decisão | Origem |
|---|---|---|
| 2026-07-20 | Stack: HTML + CSS puros, navegável em Chrome | Usuário |
| 2026-07-20 | Pasta `escudos` (Desktop) = repositório de imagens; nomes de arquivo = referência para associação | Usuário |
| 2026-07-20 | Objetivo: histórico + estatísticas + navegação visual (escudos, uniformes, competições) | Usuário |
| 2026-07-20 | Criado `PROJETO.md` como base de contexto para os demais chats | Usuário |
| 2026-10-03 | JavaScript mínimo aprovado (leitura de JSON, estatísticas e filtros dinâmicos) | Usuário |
| 2026-10-03 | Referência visual dos estilos: template **html5up-dimension** (HTML5 UP) | Usuário |

## 9. Status

- **Fase:** contexto/mapeamento. Nenhuma linha de código escrita.
- **Feito:** inventário parcial da pasta `escudos` (nomes, padrões, volume); criação deste documento.
- **Próximo passo esperado:** apresentar ao usuário as decisões pendentes da seção 7; ao aprovar, registrar no diário (seção 8) e então construir.
