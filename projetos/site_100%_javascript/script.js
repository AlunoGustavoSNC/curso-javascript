const titulo = []
const subTitulo = []
const p = []
const section = []

const criarComent = []
const ti = []

// Modificações no Header:

document.head.innerHTML += '<link rel="preconnect" href="https://fonts.googleapis.com">'

document.head.innerHTML += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'

document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">'

// Modificações no Body:

//document.body.style.background = '#aaa'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.flexDirection = 'column'
document.body.style.minWidth = '400px'
document.body.style.fontFamily = 'poppins, sans-serif'

// Header

const header = document.createElement('header')
document.body.appendChild(header)
header.style.padding = '10px'
header.style.borderBottom = '1px solid #aaa'
header.style.display = 'flex'
header.style.alignItems = 'center'
header.style.justifyContent = 'space-between'
header.style.minHeight = '60px'

// Header Logo

const logo = document.createElement('img')
header.appendChild(logo)
logo.setAttribute('src', 'logo-blue.png')
logo.setAttribute('alt', 'logo')
logo.style.maxHeight = '40px'

// Header page name

titulo[0] = document.createElement('h1')
header.appendChild(titulo[0])
titulo[0].style.textAlign = 'center'
titulo[0].style.fontSize = '1.5em'
titulo[0].style.margin = '0 20px 0 20px'

titulo[0].innerHTML = 'Site criado em 100% em JavaScript'

// Header voltar

const link = document.createElement('a')
header.appendChild(link)
link.innerHTML = '<ion-icon name="chevron-back-outline"></ion-icon>'
link.innerHTML += 'VOLTAR'

link.style.display = 'flex'
link.style.alignItems = 'center'
link.style.fontSize = '1.2em'
link.style.fontWeight = '600'
link.style.color = '#1F3541'

// Main

const main = document.createElement('main')
document.body.appendChild(main)
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.alignSelf = 'center'

// Titulo 02

titulo[1] = document.createElement('h1')
main.appendChild(titulo[1])
titulo[1].innerHTML = 'Pequenos testes com objetivo de  Fixar Conhecimentos Básicos de JavaScript'
titulo[1].style.textAlign = 'center'
titulo[1].style.fontSize = '2em'

// section comentário

section[0] = document.createElement('section')
main.appendChild(section[0])

subTitulo[0] = document.createElement('h2')
section[0].appendChild(subTitulo[0])
subTitulo[0].innerHTML = 'Crie um Comentário:'
subTitulo[0].style.fontSize = '1.6em'

// Form

const label = []
const input = []

const form = document.createElement('form')
section[0].appendChild(form)
form.style.display = 'flex'
form.style.flexDirection = 'column'
form.style.alignSelf = 'right'

label[0] = document.createElement('p')
form.appendChild(label[0])
label[0].innerHTML = 'Título:'

input[0] = document.createElement('input')
form.appendChild(input[0])
input[0].setAttribute('type', 'text')
input[0].style.width = '300px'
input[0].style.padding = '5px'
input[0].style.fontSize = '1.1em'


label[1] = document.createElement('p')
form.appendChild(label[1])
label[1].innerHTML = 'Comentário:'

input[1] = document.createElement('textarea')
form.appendChild(input[1])
input[1].setAttribute('type', 'text')
input[1].style.maxWidth = '400px'
input[1].style.height = '150px'
input[1].style.padding = '5px'
input[1].style.fontSize = '1.1em'

let br = document.createElement('br')
form.appendChild(br)

input[2] = document.createElement('input')
form.appendChild(input[2])
input[2].setAttribute('type', 'button')
input[2].setAttribute('value', 'Comentar')
input[2].setAttribute('onclick', 'comentar()')
input[2].style.maxWidth = '100px'

let hr = document.createElement('hr')
form.appendChild(hr)

for(let i in label){
    label[i].style.margin = '25px 0 0px 0'
    label[i].style.fontSize = '1.3em'
}
// Comentário

function cComent(t, c){
    criarComent.push(document.createElement('section')) 
    section[0].appendChild(criarComent[criarComent.length - 1])

    ti.push(document.createElement('h3'))
    criarComent[criarComent.length - 1].appendChild(ti[ti.length - 1])
    ti[ti.length - 1].innerHTML = t

    p.push(document.createElement('p'))
    criarComent[criarComent.length - 1].appendChild(p[p.length - 1])
    p[p.length - 1].innerHTML = c

    for(let i in criarComent){
        criarComent[i].style.border = '1px solid #aaa'
        criarComent[i].style.maxWidth = '100%'
        criarComent[i].style.padding = '10px'
        criarComent[i].style.borderRadius = '10px'
        criarComent[i].style.marginBottom = '15px'
    }
}

function comentar(){
    const coment = {titulo: '', comentario: ''}

    coment.titulo = input[0].value
    coment.comentario = input[1].value

    if(coment.titulo.length == 0 || coment.comentario.length == 0){
        window.alert('[ERRO] Informações Faltando')
    }
    else{
        cComent(input[0].value, input[1].value)
    }

}

// section style

for(let i in section){
    section[i].style.border = '1px solid #aaa'
    section[i].style.maxWidth = '100%'
    section[i].style.padding = '10px'
    section[i].style.borderRadius = '10px'
    section[i].style.marginBottom = '30px'
}