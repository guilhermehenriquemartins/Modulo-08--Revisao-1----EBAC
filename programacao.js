const form = document.getElementById('formulario')
let linhas = ''
const feliz = '<img src="imagens/feliz.png" alt="feliz">'
const triste = '<img src="imagens/triste.png" alt="triste">'
const atividades = []
const notas = []

form.addEventListener('submit', function(e){
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  recebeMediaFinal();
})

function adicionaLinha() {
  const NomeAtividade = document.getElementById('nome-atividade')
  const NotaAtividade = document.getElementById('nota-atividade')

  atividades.push(NomeAtividade.value)
  notas.push(Number(NotaAtividade.value))

  let linha = `<tr>`
  linha += `<td>${NomeAtividade.value}</td>`
  linha += `<td>${NotaAtividade.value}</td>`
  linha += `<td>${NotaAtividade.value >= 7 ? feliz : triste}</td>`
  linha += `</tr>`

  linhas += linha

  NomeAtividade.value = ''
  NotaAtividade.value = ''
}

function atualizaTabela() {
  const CorpoTabela = document.querySelector('tbody')
  CorpoTabela.innerHTML = linhas
}


function calculaMediaFinal() {
  let somaDasNotas = 0

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }
  return somaDasNotas / notas.length;
}

function recebeMediaFinal() {
  const Media = calculaMediaFinal()
  document.getElementById('nota-media').innerHTML = Media
  document.getElementById('resultado-media').innerHTML = Media >= 7 ? 'Aprovado' : 'Reprovado'
}
