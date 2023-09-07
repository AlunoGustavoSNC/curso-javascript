//É possível manipular o array mesmo sendo const
const names = ['Gustavo', 'Ezequiel', 'Victor']

let Gustavo = names[0]

console.log(Gustavo)

//Adiciona um item no final do vetor
names.push('Ruan')
console.log(names)

//Adiciona um item no inicio do vetor
names.unshift('Valdir')
console.log(names)

//Retira o primeiro item da lista
names.shift()
console.log(names)

//Retira o item no final do vetor
names.pop()
console.log(names)

//Procurando elemento
console.log(names.indexOf('Gustavo'))

//Vendo quantos elementos tem o vetor
console.log(names.length)

//Vendo se uma variavel é um vetor
console.log(Array.isArray(names))