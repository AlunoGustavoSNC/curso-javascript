var num = [20, 33, 19]

//adionando mais um elemento ao vetor:
num[3] = 40

//adicionando um elemento na ultima posição:
num.push(32)

for(let i = 0; i < num.length; ++i){
    console.log(`${num[i]} `)
}

console.log('Colocando os elementos em ordem crescente')

num.sort()
console.log(num)

console.log('For para variáveis composta e objetos')

for(let i in num){
    console.log(num[i])
}

console.log('Achando um valor no vetor:')

console.log(`O valor ${num[num.indexOf(40)]} está no elemento ${num.indexOf(40)}`)

console.log('Quando não existir o valor determinado dentro do vetor, o método indexOf() mostrará o valor -1')