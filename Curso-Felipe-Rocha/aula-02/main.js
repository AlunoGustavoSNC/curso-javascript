if(1+1==2){
    //mais antigo
    //Escopo Global
    var message01 = 'Hello World'
}

// mais mordeno

    //Pode mudar o valor
let message02 = 'Olá Mundo'

    //Não pode mudar o valor
const message03 = 'Olá Mundo'

alert(message01)

//Strings

let string = 'Essa é uma String'

//Mostra o tamanho da string

console.log(string.length)

//Concatenação

const firstname = 'Gustavo'
const lastname = 'Nascimento'

console.log('Meu nome é ' + firstname + ' ' + lastname)
console.log(`Meu nome é ${firstname} ${lastname}`)

//String como lista

const names = 'Gustavo,Victor,Ezequiel,Ruan,Valdir'

console.log(names.split(','))

//Números

let number = 4

console.log(number + 10)
console.log(typeof number)

console.log(typeof number.toString())

//Booleano

    //false e true

//NULL e Undefined

const x = null

const y = undefined

//Vetor

const vetor = [1, 2, 3, 4, 5]

//Objeto

const objeto = {name: 'Gustavo', lastname: 'Nascimento'}
