const form = document.getElementById('formulario')
let linhas = ''
let feliz = '<img src="imagens/feliz.png" alt="Aprovado">'
let triste = '<img src="imagens/triste.png" alt="Reprovado">'
const notas = []
const atividades = []
const Aprovado = '<span class = "resultado aprovado">Aprovado</span>'
const Reprovado = '<span class="resultado reprovado">Reprovado</span>'
const NotaMinima = Number(prompt('Digite a nota mínima: '))

form.addEventListener('submit', function(e){
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
  AtualizaMedia();
})

function adicionaLinha() {
  const NomeAtividade = document.getElementById('nome-atividade')
  const NotaAtividade = document.getElementById('nota-atividade')

  if(atividades.includes(NomeAtividade.value)) {
    alert(`Atividade ${NomeAtividade.value} já foi inserida!`)
  } else {
    notas.push(Number(NotaAtividade.value))
    atividades.push(NomeAtividade.value)

    let linha = `<tr>`
    linha += `<td>${NomeAtividade.value}</td>`
    linha += `<td>${NotaAtividade.value}</td>`
    linha += `<td>${NotaAtividade.value >= NotaMinima ? feliz : triste}</td>`
    linha += `</tr>`

    linhas += linha
  }

  NomeAtividade.value = ''
  NotaAtividade.value = ''
}

function atualizaTabela() {
  const CorpoTabela = document.querySelector('tbody')
  CorpoTabela.innerHTML = linhas
}

function CalculaMedia() {
  let SomaMedia = 0
  for (let i = 0; i < notas.length; i++ ) {
    SomaMedia += notas[i]
  }
  return SomaMedia / notas.length
}

function AtualizaMedia() {
  const RecebeMedia = CalculaMedia()
  document.getElementById('nota-media').innerHTML = RecebeMedia
  document.getElementById('resultado-media').innerHTML = RecebeMedia >= NotaMinima ? Aprovado : Reprovado
}