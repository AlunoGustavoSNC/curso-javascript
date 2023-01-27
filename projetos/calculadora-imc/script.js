const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const res = document.querySelector('#res')

function calcular(){
    if(peso.value.length == 0 || altura.value.length == 0){
        window.alert('[ERRO] informações faltando')
    }
    else{
        var span = document.querySelector('span')
        var imc = peso.value / (altura.value * 2)
        var total = imc.toFixed(2)
        res.innerHTML = (`<p> O seu IMC é ${total} </p>`)

        if(Number(total) < 16){
            res.innerHTML += ('<span>Você tem Baixo Peso (grau I)</span>')
            let span = document.querySelector('span').style.color = '#8E0000'
        }
        else if(Number(total) < 17 ){
            res.innerHTML += ('<span>Você tem Baixo Peso (grau II)</span>')
            let span = document.querySelector('span').style.color = '#FF0000'
        }
        else if(Number(total) < 18.50 ){
            res.innerHTML += ('<span>Você tem Baixo Peso (grau III)</span>')
            let span = document.querySelector('span').style.color = '#E4FF00'
        }
        else if(Number(total) < 25 ){
            res.innerHTML += ('<span>Você tem o peso adequado</span>')
            let span = document.querySelector('span').style.color = '#61FF00'
        }
        else if(Number(total) < 30 ){
            res.innerHTML += ('<span>Você está com sobrepeso</span>')
            let span = document.querySelector('span').style.color = '#E4FF00'
        }
        else if(Number(total) < 35 ){
            res.innerHTML += ('<span>Você tem Obesidade (grau I)</span>')
            let span = document.querySelector('span').style.color = '#FF8700'
        }
        else if(Number(total) < 40 ){
            res.innerHTML += ('<span>Você tem Obesidade (grau II)</span>')
            let span = document.querySelector('span').style.color = '#FF0000'
        }
        else{
            res.innerHTML += ('<span>Você tem Obesidade (grau III)</span>')
            let span = document.querySelector('span').style.color = '#8E0000'
        }
    }
    peso.value = ''
    peso.focus()    
    //altura.value = ''
}