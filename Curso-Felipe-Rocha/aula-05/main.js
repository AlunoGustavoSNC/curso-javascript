const pessoa = {
    nome: 'Gustavo',
    sobrenome: 'Nascimento',
    idade: 18,
    hobbies: ['Jogar futsal', 'programar', 'eletrônica']  
}

console.log(pessoa.hobbies[1])
console.log(pessoa.hobbies.indexOf('programar'))

//Destructuring

const {nome: primeiroNome, sobrenome, idade, hobbies} = pessoa

console.log(primeiroNome)
console.log(sobrenome)

//Adicionar propiedade ao objeto

pessoa.animal_estimacao = {cachorro: 'Hara', gato: null}

console.log(pessoa.animal_estimacao.cachorro)

/////////////////////////////////////////////////////////////////////////////

//Exercício

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

console.log(tarefas[0].descricao)