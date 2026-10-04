# Projeto Escudos — Futebol

> **Este arquivo é a fonte única de verdade do projeto.** Ele serve de base de contexto para todas as conversas e chats que trabalharem em itens específicos.


---

## 1. Objetivo do projeto

Registrar resultados de futebol (clubes e seleções) para permitir:

1. **Consulta histórica** — Exibir resultados de jogos contendo nome dos clubes, resultado do placar, nome da competição e fase.
2. **Análise de estatísticas** — jogos, vitórias, empates, derrotas, gols pró/contra, saldo, artilharia (se disponível), campanhas por temporada.


Visão geral

O usuário é o treinador e treina times específicos, que podem mudar a cada temporada.
Este documento é a referência única do formato da tabela e dos registros. As temporadas são registradas em arquivos separados por ano.

Todos os registros envolvem sempre um dos times treinados pelo usuário. Resultados de terceiros não são registrados.

Os resultados serão inseridos manualmente 


Formato do registro: 

[Indicador] [Time da casa] [saldo de gols] x [saldo de gols] [Time visitante] - [Competição] - [Fase] - [Jogo de ida/volta]
(obs.: em pontos corridos, omitir "Fase" e "Jogo de ida/volta")
💬 [Comentário da Mídia]

Regra do indicador (sempre do ponto de vista do treinador, independente de casa/fora):

Indicador	Significado
🟢	Vitória
⚪	Empate
🔴	Derrota
Regra do campo "Fase" e "Jogo de ida/volta":

As colunas "Fase" e "Jogo de ida/volta" só são exibidas em competições eliminatórias (mata-mata) — ex.: "Final", "Semifinal", "Oitavas de final", "Jogo de ida/volta".
Em competições de pontos corridos (ex.: Florida Cup, Brasileirão), essas colunas são omitidas — o registro segue direto para o Comentário da Mídia.
Exceção: o Brasileirão pode ter uma partida final; nesse caso, a fase ("Final") e o "Jogo de ida/volta" (se houver) são informados no momento do registro.
Em amistosos, registra-se apenas "Amistoso" — sem "Fase" nem "Jogo de ida/volta".
Regra do troféu:

🏆 é anexado a resultados de Finais que renderam título.
Em finais com jogo de ida e volta, o 🏆 vai apenas no jogo de volta (onde o título se concretiza).
Em finais em jogo único, o 🏆 vai nesse jogo.
Comentário da Mídia (entidade do projeto):

Texto curto que acompanha cada registro.
Sempre referenciado como a entidade "Comentário da Mídia" nas conversas e documentos do projeto.

Convenções
Placar sempre no formato [saldo] x [saldo], casa primeiro.
Competição e fase (quando houver) em nome por extenso (ex.: "Brasileirão 2029", "Final").
O indicador (🟢/⚪/🔴) vai sempre no início da linha, antes do texto.
O 🏆 vai no final da linha do resultado (apenas em finais com título).
O Comentário da Mídia vem em linha seguinte, prefixado com 💬 e em itálico.