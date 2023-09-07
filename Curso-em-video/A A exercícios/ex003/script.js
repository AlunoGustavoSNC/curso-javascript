var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
var res = document.querySelector('#res')

function contar(){

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }
    else if(passo.value == 0 || passo.value < 0){
        window.alert('[ERRO] passo com valor 0 ou menor')
    }
    else{
        res.innerHTML = 'Contando: '

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i > f){
            for(i; i >= f; i -= p){

                res.innerHTML += (`${i} `)
            }
            res.innerHTML += (' FIM!!!')  
        }
        else{
            for(i; i <= f; i += p){

                res.innerHTML += (`${i} `)
            }
            res.innerHTML += (' FIM!!!') 
        }
    }
}

