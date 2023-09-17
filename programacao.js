const form = document.getElementById('formulario')
let linhas = ''
const feliz = `<img src="imagens/feliz.png" alt="feliz">`
const triste = `<img src="imagens/triste.png" alt="feliz">`

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const NomeAtividade = document.getElementById('nome-atividade')
  const NotaAtividade = document.getElementById('nota-atividade')

  let linha = `<tr>`
  linha += `<td>${NomeAtividade.value}</td>`
  linha += `<td>${NotaAtividade.value}</td>`
  linha += `<td>${NotaAtividade.value >= 7 ? feliz : triste}</td>`
  linha += `</tr>`

  linhas += linha

  const CorpoTabela = document.querySelector('tbody')
  CorpoTabela.innerHTML = linhas

  NomeAtividade.value = '';
  NotaAtividade.value = '';
})