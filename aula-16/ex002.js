//Função com dois ou mais parâmetros

function soma(n1 = 0, n2 = 0, n3 = 0){
    let soma = n1 + n2 + n3
    return soma
}

console.log(`Se for colocado apenas uma parâmetro, retornará o mesmo número. EXEMPLO: ${soma(5)}`)

console.log(`Se for enviado dois ou três números, retornará a soma dos mesmos. EXEMPLO: ${soma(5, 10)} e ${soma(4, 9, 7)}`)