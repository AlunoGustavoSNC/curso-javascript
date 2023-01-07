/*function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    res.innerHTML = `oi oi ${fano}`
   
    if(fano.value.length == 0 || fano.value.length > ano){
        window.alert('[ERRO] Ano inválido')
    }
    else{
        window.alert('Tudo certo')
    }
}*/

function verificar(){
    var data = new Date()
    var ano = data.getFullYear
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || fano.value.lenght < ano){
        window.alert('[ERRO]')
    }
    else{
        window.alert('Tudo certo')
    }
}