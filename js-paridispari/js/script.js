/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 6.
Generiamo un numero random (sempre da 1 a 6) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?
*/

// esecuzione logica

// - prompt per scegliere pari o dispari 
// - prompt per numero da 1 a 6 
// - funzione per generare un numero random 
// - sommiamo i due numeri 
// - funzione per capire se il numero è pari o dispari x % 2 = 0 è pari
// - se scelta operatore è pari e somma dei numeri è pari allora hai vinto, viceversa hai perso 


const choosePariDispari = prompt("Scegli pari o dispari")
const numeroDaUnoASeiStr = prompt("Scegli un numero da 1 a 6")
const numeroDaUnoASei = parseInt(numeroDaUnoASeiStr)
console.log(choosePariDispari)
console.log(numeroDaUnoASei)
function randomNumber(min,max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const randnum = randomNumber(1,6)
console.log("numero random",randnum)
console.log(numeroDaUnoASei + randnum)
const somma = (numeroDaUnoASei + randnum)
function pariDispari(x){
    let result = "dispari"
    if (x % 2 === 0){
        result = "pari";
    }
    return result;
}

if (choosePariDispari === pariDispari(somma)) {
    console.log("HAI VINTO!!")
}else{
    console.log("HAI PERSO!!")
    
}