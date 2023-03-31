const parola = prompt('scrivi una parola')

function ruotaParola(parola){
let parolaRuotata = ''

    for (let i = parola.lenght - 1; i >= 0; i--){
        parolaRuotata += parola[i]
    }

    return parolaRuotata

}

let parolaInvertita = ruotaParola(parola);

if(parola == parolaInvertita){
    console.log(`la parola ${parola} è palindroma`) 
} else{
    console.log(`la parola ${parola} non è palindroma`) 
}



// ----------------------secondo esercizio------------------------ //

let sceltaPlayer = prompt("sciegli pari o dispari")
let numeroPlayer = parseInt(prompt("segli un numero da 1 a 5"))

function numerorandom(min, max){
    return Math.floor( Math.random() * (max - min +1) + min)
}

let numeroCpu = numerorandom(1, 5);

let somma = numeroPlayer + numeroCpu;

function pariOdispari(x){
    if(x % 2 == 0){
        return 'pari'
    } else{
        return 'dispari'
    }
}

if(pariOdispari(somma) == sceltaPlayer){
    console.log(`hai scelto ${sceltaPlayer} e ${numeroPlayer}, con ${numeroCpu} del Computer la somma è ${somma} quindi vince il Giocatore`)
} else{
    console.log(`hai scelto ${sceltaPlayer} e ${numeroPlayer}, con ${numeroCpu} del Computer la somma è ${somma} quindi vince il Computer`)
}