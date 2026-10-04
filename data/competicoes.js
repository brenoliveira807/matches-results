// data/competicoes.js — camada de dados (estrutura JSON-compatível).
window.COMPETICOES = {
  "competicoes": [
    // Amistosos e torneios internacionais
    { "id": "amistoso",    "nome": "Amistoso",    "tipo": "amistoso", "pais": null, "escudo": null },
    { "id": "florida-cup", "nome": "Florida Cup", "tipo": "torneio",  "pais": null, "escudo": "florida-cup.png" },
    
    // Competições nacionais e internacionais do Corinthians (2028-2029)
    { "id": "brasileirao", "nome": "Brasileirão", "tipo": "liga", "pais": "Brasil", "escudo": "brasileirao-serie-a-logo-footylogos-320.webp" },
    { "id": "libertadores", "nome": "Libertadores", "tipo": "copa",  "pais": "Internacional", "escudo": "libertadores-logo.png" },
    { "id": "copa-do-brasil", "nome": "Copa do Brasil", "tipo": "copa", "pais": "Brasil", "escudo": "copa-do-brasil-logo.png" },
    
    // Copa América (Uruguai)
    { "id": "copa-america", "nome": "Copa América", "tipo": "copa", "pais": "América", "escudo": "copa-america-logo.png" },
    { "id": "amistoso-internacional", "nome": "Amistoso Internacional", "tipo": "amistoso", "pais": null, "escudo": null },
    
    // Eliminatórias (Brasil)
    { "id": "eliminatorias-copa", "nome": "Eliminatórias da Copa do Mundo", "tipo": "eliminatórias", "pais": "América", "escudo": "copa-do-mundo-logo.png" },
    
    // Copas Intercontinentais
    { "id": "intercontinental", "nome": "Copa Intercontinental", "tipo": "copa", "pais": "Internacional", "escudo": "copa-intercontinental-logo.png" }
  ]
};