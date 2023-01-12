function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamnete')
    }
    else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'um Homem'
            if(idade>=0 && idade < 16){
                img.setAttribute('src', 'img/menino.png')
            }
            else if(idade < 55){
                img.setAttribute('src', 'img/homem.png')
            }
            else{
                img.setAttribute('src', 'img/idoso.png')
            }
        }
        else{
            genero = 'uma Mulher'
            if(idade>=0 && idade < 16){
                img.src = 'img/menina.png'
            }
            else if(idade < 55){
                img.src = 'img/mulher.png'
            }
            else{
                img.src = 'img/idosa.png'
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}