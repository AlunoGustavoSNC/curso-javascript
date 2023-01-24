var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
var res = document.querySelector('#res')

function contar(){

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }
    else/*if(inicio.value < fim.value)*/{
    
        /*for(var i = 0; inicio.value < fim.value; i += passo.value){
            res.innerHTML = ('deu certo')
        }*/
    }
    /*else if(inicio.value > fim.value){

        for(var i = 0; inicio < fim; i -= passo){

            var res = document.querySelector('#res')
            res.innerHTML(`${res} `)
        }
    }*/
}

