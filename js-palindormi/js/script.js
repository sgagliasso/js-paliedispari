/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (provate a implementare questa funzione con il ciclo for)

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?
*/


/*
esecuzione logica
- chiedere all' utente di inserire una parola 
- salvarla in un array
- prendere l' ultima lettera e salvare in una array
- ripere l' operazione per tutte le lettere
- confrontare i due array
- se sono uguali stampare: true


*/

/*

function palindroma (word){
   
    const ispalindroma = "";
    let result;
    for (let i = word.length; i <= 0; i--){
       let result;
       const  ispalindroma = word.charat(i)
    }
    console.log(ispalindroma)
    if (word === ispalindroma) {
        result = true
    }
    return result;
}

palindroma("Anna");

*/

// const words = "Anna"
// const ispalindromas = "";
//     for (let i = words.length; i <= 0; i--){
//        const simo = words.charAt(i)
//        ispalindromas.concat(simo)
//        console.log(simo)
//     }
// console.log(ispalindromas)


function palindroma (word){
let ispalindroma = "";  // Cambiato da const a let
let result = false;
for (let i = word.length - 1; i >= 0; i--) {  // Partiamo dall'ultimo carattere
    const stringReverse = word.charAt(i);
    ispalindroma += stringReverse;  // Aggiungiamo il carattere alla stringa
}  if (word.toLowerCase() === ispalindroma.toLowerCase()) {
    result = true
}
return result;
}
 
const word = prompt("Inserisci una parola e ti dirò se è palindorma")
console.log(palindroma(word))