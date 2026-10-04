# Script para atualizar o repositório Git com todo o histórico

# Navegar até a pasta do projeto
Set-Location "C:/Users/Breno Oliveira/.lmstudio/apps/bionic/projects/f17ef1b8-a48e-4c9e-bb22-434f9b5a3bf7/workspace"

Write-Host "`n🔍 Verificando status do repositório..."
git status

Write-Host "`n📦 Adicionando todos os arquivos..."
git add .

Write-Host "`n💾 Fazendo commit do histórico 2028..."
git commit -m "Historico 2028: Corinthians (campeonato completo) + Uruguai (Copa America) + Brasil (eliminatorias)"

Write-Host "`n📤 Enviando para o GitHub..."
git push origin main

Write-Host "`n✅ Upload concluído com sucesso!"