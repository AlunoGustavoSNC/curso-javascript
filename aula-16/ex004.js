function fatorial(n){
    for(let c = n-1; c>0 ; --c){
        n *= c
    }
    return n
}

let fat = 5
console.log(`${fat} fatorial é ${fatorial(fat)}`)