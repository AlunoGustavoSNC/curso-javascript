function tabuada(){
    let txtn = document.querySelector('#txtn')
    let tab = document.querySelector('#btn')
    let res = document.querySelector('#res')

    if(txtn.value.length == 0){
        window.alert('Digite um número')
    }
    else{
        res.innerHTML = ('<hr>')

        for(let i = 1; i < 11; ++i){
    
            let num = Number(txtn.value)
            let mult = i * num
            
            res.innerHTML += (`${num} * ${i} = ${mult} <br>`)
        }
    }
}