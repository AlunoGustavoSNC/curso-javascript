let num = document.querySelector('#txtn')
let lista = document.querySelector('#flist')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }
    else{
        window.alert('[ERRO] Número inválido')
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        window.alert('[ERRO] Número já adicionado')
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))

        let option = document.createElement('option')
        lista.appendChild(option)
        option.innerHTML = 'Valor ' + valores[valores.length - 1] + ' adicionado'

        res.innerHTML = ''
    }

    num.value = ''
    num.focus()
}

function analisar(){
    if(valores.length != 0){
        res.innerHTML = `Ao todo, temos ${valores.length} números adicionados <br>`

        valores.sort((a, b) => {
            if (a < b){ return -1 }
            else{ return 1 }
        })

        res.innerHTML += `<br> O menor valor Adicionado é ${valores[0]} <br>`

        res.innerHTML += `<br> O maior valor Adicionado é ${valores[valores.length - 1]} <br>`

        let soma = valores[0]
        for(let i = 1; i < valores.length; ++i){
            soma += valores[i]
        }

        res.innerHTML += `<br> A soma dos valores é ${soma} <br>`

        res.innerHTML += `<br> A média dos valores é ${soma / valores.length} <br>`
    }
    else{
        window.alert('[ERRO] Adicione valores a lista')
    }
}