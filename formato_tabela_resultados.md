# Especificação — Tabela de Resultados

> Projeto: Tabela de Resultados do Treinador
> Status: **Fechado (v1)**
> Última atualização: 2026-10-03

## Visão geral

- O usuário é o **treinador** e treina times específicos, que podem **mudar a cada temporada**.
- Este documento é a **referência única do formato** da tabela e dos registros.
- **Divisão do projeto:**
  - **Chat 1 (este):** define e mantém o formato da tabela e suas regras.
  - **Chat 2:** executa os registros de resultados seguindo esta especificação.
- Todos os registros envolvem **sempre** um dos times treinados pelo usuário. Resultados de terceiros **não** são registrados.

## Times treinados

| Temporada | Times treinados |
|-----------|-----------------|
| **2029 (atual)** | Corinthians (clube) · Seleção Brasileira (seleção) |

> A lista é **dinâmica**: atualizar esta tabela sempre que os times treinados mudarem de temporada.

## Formato do registro

```
[Indicador] [Time da casa] [saldo de gols] x [saldo de gols] [Time visitante] - [Competição] - [Fase] - [Jogo de ida/volta]
(obs.: em pontos corridos, omitir "Fase" e "Jogo de ida/volta")
💬 [Comentário da Mídia]
```

**Regra do indicador** (sempre do ponto de vista do **treinador**, independente de casa/fora):

| Indicador | Significado |
|-----------|-------------|
| 🟢 | Vitória |
| ⚪ | Empate |
| 🔴 | Derrota |

**Regra do campo "Fase" e "Jogo de ida/volta":**

- As colunas "Fase" e "Jogo de ida/volta" só são exibidas em competições **eliminatórias** (mata-mata) — ex.: "Final", "Semifinal", "Oitavas de final", "Jogo de ida/volta".
- Em competições de **pontos corridos** (ex.: Florida Cup, Brasileirão), essas colunas **são omitidas** — o registro segue direto para o Comentário da Mídia.
- **Exceção:** o Brasileirão pode ter uma **partida final**; nesse caso, a fase ("Final") e o "Jogo de ida/volta" (se houver) são informados no momento do registro.
- Em **amistosos**, registra-se apenas "Amistoso" — sem "Fase" nem "Jogo de ida/volta".

**Regra do troféu:**

- 🏆 é anexado a **resultados de Finais que renderam título**.
- Em finais com **jogo de ida e volta**, o 🏆 vai **apenas no jogo de volta** (onde o título se concretiza).
- Em finais em **jogo único**, o 🏆 vai nesse jogo.

**Comentário da Mídia** *(entidade do projeto)*:

- Texto curto que acompanha **cada** registro.
- Sempre referenciado como a entidade **"Comentário da Mídia"** nas conversas e documentos do projeto.

## Exemplos

```
🟢 Corinthians 3 x 1 Santos - Brasileirão 2029
💬 Mídia: "Começo avassalador, equipe segura as pressões e vence com tranquilidade."

🔴 São Paulo 2 x 1 Corinthians - Brasileirão 2029
💬 Mídia: "Reversão de sorte no Morumbi, gol de cabeça no fim frustra o Corinthians."

⚪ Argentina 1 x 1 Seleção Brasileira - Eliminatórias 2029
💬 Mídia: "Equilíbrio total em Buenos Aires, defesas brilhantes nos dois lados."

🟢 Seleção Brasileira 2 x 0 Chile - Eliminatórias 2029
💬 Mídia: "Atuação sólida e controle de jogo, dois gols na segunda etapa."

⚪ Corinthians 1 x 1 Flamengo - Brasileirão 2029 - Final - Jogo de ida
💬 Mídia: "Tática de espera prevalece, título fica em aberto."

🟢 Corinthians 2 x 1 Flamengo - Brasileirão 2029 - Final - Jogo de volta 🏆
💬 Mídia: "Título histórico após virada épica no último minuto."
```

## Convenções

- Placar sempre no formato `[saldo] x [saldo]`, casa primeiro.
- Competição e fase (quando houver) em nome por extenso (ex.: "Brasileirão 2029", "Final").
- O indicador (🟢/⚪/🔴) vai **sempre no início da linha**, antes do texto.
- O 🏆 vai **no final da linha do resultado** (apenas em finais com título).
- O Comentário da Mídia vem em linha seguinte, prefixado com 💬 e em itálico.
