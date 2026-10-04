// data/times.js — camada de dados (estrutura JSON-compatível).
// Exposto como global para funcionar offline via file:// (sem servidor).
window.TIMES = {
  "temporada": "2028-2029",
  "treinadores": ["corinthians", "brasil", "uruguai"],
  "times": [
    { "id": "corinthians",        "nome": "Corinthians",        "tipo": "clube",   "pais": "Brasil",         "escudo": "corinthians-logo-footylogos-320.webp" },
    { "id": "selecao-brasileira", "nome": "Seleção Brasileira", "tipo": "selecao", "pais": "Brasil",         "escudo": "brazil-national-team-logo-footylogos-320.webp" },
    { "id": "brasil",              "nome": "Brasil",            "tipo": "selecao", "pais": "Brasil",         "escudo": "brazil-national-team-logo-footylogos-320.webp" },
    { "id": "uruguai",            "nome": "Uruguai",           "tipo": "selecao", "pais": "Uruguai",       "escudo": "uruguay-national-team-logo-footylogos-320.webp" },
    { "id": "the-old-boys",       "nome": "The Old Boys",       "tipo": "clube",   "pais": null,             "escudo": "the-old-boys.png" },
    { "id": "al-ittihad",         "nome": "Al-Ittihad Club",    "tipo": "clube",   "pais": "Arábia Saudita", "escudo": "al-ittihad-logo-footylogos-320.webp" },
    { "id": "junior",             "nome": "Junior",             "tipo": "clube",   "pais": "Colômbia",       "escudo": "atletico-junior-logo-footylogos-320.webp" },
    { "id": "henan",              "nome": "Henan",              "tipo": "clube",   "pais": "China",          "escudo": "henan-songshan-longmen.76824806.png" },
    { "id": "gremio-novo-horizontino", "nome": "Grêmio Novo Horizontino", "tipo": "clube",   "pais": "Brasil",         "escudo": "gremio-novorizontino-logo-footylogos-320.webp" },
    { "id": "rb-bragantino",      "nome": "RB Bragantino",      "tipo": "clube",   "pais": "Brasil",         "escudo": "rb-bragantino-logo-footylogos-320.webp" },
    { "id": "fortaleza",          "nome": "Fortaleza",          "tipo": "clube",   "pais": "Brasil",         "escudo": "fortaleza-logo-footylogos-320.webp" }
  ]
};