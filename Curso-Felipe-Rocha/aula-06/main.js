const tarefas = [
    {
        id: 1,
        descricao: 'Estudar programacao',
        completada: true
    },
    {
        id: 2,
        descricao: 'Ler',
        completada: false
    }
]

console.log(tarefas)

// Transformando Objeto em JSON
const tarefasJSON = JSON.stringify(tarefas)

console.log(tarefasJSON)

// Transformando JSON em Objeto

const tarefasVetor = JSON.parse(tarefasJSON)

console.log(tarefasVetor)