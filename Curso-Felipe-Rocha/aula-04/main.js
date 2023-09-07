//É possível manipular o array mesmo sendo const
const numbers = [1, 2, 3, 4, 5]

console.log(numbers)

//O metodo map aplica uma função em cada item do vetor
let numbersMultiplied = numbers.map(function(n){
    return n * 2
})

console.log(numbersMultiplied)

///////////////////////////////////

let ages = [8, 27, 18, 32, 12]
console.log(ages)

// O método filter cria um vetor através de outro vetor de acordo com um filtro

let agesFiltred = ages.filter(function(n){
    return n <= 20
})

console.log(agesFiltred)

// O método reduce reduz toda o vetor a um único item

const sumOfAges = ages.reduce(function(age, accumulator){
    return accumulator = accumulator + age
}, 0)

console.log(sumOfAges)