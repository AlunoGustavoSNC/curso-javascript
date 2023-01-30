// Modificações no Header:

document.head.innerHTML += '<link rel="preconnect" href="https://fonts.googleapis.com">'

document.head.innerHTML += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'

document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">'

// Modificações no Body:

//document.body.style.background = '#aaa'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.flexDirection = 'column'
document.body.style.minWidth = '250px'
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

const titulo = document.createElement('h1')
header.appendChild(titulo)
titulo.style.textAlign = 'center'
titulo.style.fontSize = '1.5em'
titulo.style.margin = '0 20px 0 20px'

titulo.innerHTML = 'Site criado em 100% em JavaScript'

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

// titulo 02

const titulo2 = document.createElement('h2')
document.body.appendChild(titulo2)
titulo2.innerHTML = 'Projeto com objetivo de  Fixar Conhecimentos Básicos de JavaScript'
titulo2.style.textAlign = 'center'