//#72c0f8 manha
//#bf5000 tarde
//#101a2d noite

function carregar(){
    var msg = window.document.getElementsByClassName("msg")[0]
    var img = window.document.querySelector('img#imagem')
    var horaD = new Date()
    var hora = horaD.getHours()

    msg.innerHTML = `<p>Agora são exatamente <strong>${hora} horas</strong></p>`

    if(hora<13){
        msg.innerHTML += '<p>Bom Dia</p>'
        img.src = 'img/manha.png'
        img.alt = 'foto-dia'
        document.body.style.background = '#72c0f8'
    }
    else if(hora<18){
        msg.innerHTML += '<p>Boa Tarde</p>'
        img.src = 'img/tarde.png'
        img.alt = 'tarde'
        document.body.style.background = '#bf5000'
    }
    else{
        msg.innerHTML += '<p>Boa Noite</p>'
        img.src = 'img/noite.png'
        img.alt = 'noite'
        document.body.style.background = '#101a2d'
    }
}