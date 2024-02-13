const quests = [
  {
    quest: 'O que é JavaScript?',
    responses: [
      'Uma linguagem de marcação para criar estrutura em páginas web',
      'Uma linguagem de programação para tornar as páginas web interativas',
      'Um banco de dados utilizado para armazenar informações do usuário'
    ],
    correct: 1
  },
  {
    quest: 'Qual é a maneira correta de se referir a um arquivo externo de JavaScript em HTML?',
    responses: [
      '<script href="script.js">',
      '<script src="script.js">',
      '<script link="script.js">'
    ],
    correct: 1
  },
  {
    quest: 'Qual desses não é um tipo de dados em JavaScript?',
    responses: [
      'Boolean',
      'String',
      'Float'
    ],
    correct: 2
  },
  {
    quest: 'O que é uma variável em JavaScript?',
    responses: [
      'Uma função que retorna um valor específico',
      'Um container para armazenar dados',
      'Um tipo de loop para iterar sobre uma lista de elementos'
    ],
    correct: 1
  },
  {
    quest: 'Como você escreve um comentário de uma linha em JavaScript?',
    responses: [
      '// Este é um comentário',
      '<!-- Este é um comentário -->',
      '/** Este é um comentário */'
    ],
    correct: 0
  },
  {
    quest: 'Qual é o operador para atribuição de valor em JavaScript?',
    responses: [
      '=',
      '==',
      '==='
    ],
    correct: 0
  },
  {
    quest: 'O que é um array em JavaScript?',
    responses: [
      'Uma estrutura de dados que armazena uma coleção ordenada de elementos',
      'Uma função que executa uma determinada tarefa',
      'Um método para selecionar elementos no DOM'
    ],
    correct: 0
  },
  {
    quest: 'Qual é a função do método `console.log()` em JavaScript?',
    responses: [
      'Para imprimir mensagens de erro no console',
      'Para declarar variáveis',
      'Para exibir mensagens no console do navegador'
    ],
    correct: 2
  },
  {
    quest: 'O que o operador "===" faz em JavaScript?',
    responses: [
      'Compara dois valores para igualdade, sem realizar coerção de tipo',
      'Atribui um valor a uma variável',
      'Verifica se um valor é maior que outro'
    ],
    correct: 0
  },
  {
    quest: 'Qual é o resultado da expressão `5 + "5"` em JavaScript?',
    responses: [
      '10',
      '55',
      'Erro'
    ],
    correct: 1
  }
];

const quizContainer = document.querySelector('#quizContainer')
const template = document.querySelector('template')


quests.map((quest) => {
  const quizItem = template.content.cloneNode(true)

  quizItem.querySelector('h3').textContent = quest.quest
  quest.responses.map(response => {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)

    dt.querySelector('span').textContent = response

    quizItem.querySelector('dl').appendChild(dt)
  })

  quizItem.querySelector('dl dt').remove()

  quizContainer.appendChild(quizItem)
})
