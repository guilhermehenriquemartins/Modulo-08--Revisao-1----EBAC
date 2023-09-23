const form = document.getElementById('formulario')
let linhas = ''
const feliz = '<img src="imagens/feliz.png" alt="Aprovado">'
const triste = '<img src="imagens/triste.png" alt="Reprovado">'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  calculaMedia();
  atualizaMedia();
  
})

function adicionaLinha() {
  const NomeAtividade = document.getElementById('nome-atividade')
  const NotaAtividade = document.getElementById('nota-atividade')

  if (atividades.includes(NomeAtividade.value)) {
    alert(`Atividade ${NomeAtividade.value} já está incluída!`)
  } else {
    atividades.push(NomeAtividade.value)
    notas.push(Number(NotaAtividade.value))

    let linha = `<tr>`
    linha+= `<td>${NomeAtividade.value}</td>`
    linha += `<td>${NotaAtividade.value}</td>`
    linha += `<td>${NotaAtividade.value >= 7 ? feliz : triste}</td>`
    linha += `</tr>`

    linhas += linha

    const CorpoTabela = document.querySelector('tbody')
    CorpoTabela.innerHTML = linhas
  }
}

function calculaMedia() {
  let MediaFinal = 0
  for(let i = 0; i < notas.length; i++) {
    MediaFinal += notas[i]
  }
  return MediaFinal / notas.length
}

function atualizaMedia() {
  const MediaNotas = calculaMedia()
  document.getElementById('nota-media').innerHTML = MediaNotas
  document.getElementById('resultado-media').innerHTML = MediaNotas >= 7 ? spanAprovado : spanReprovado
}