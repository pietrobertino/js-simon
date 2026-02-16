//1) Visualizzare in pagina 5 numeri casuali da 1 a 50 compresi.

const countdownNode = document.getElementById("countdown");
const bodyNode = document.querySelector("body");

let intervalId;
let countdown = 30;

console.log(getFiveNumbers())

bodyNode.addEventListener("click", ()=> {
    // Faccio apparire il timer
    intervalId = setInterval(function(){
        countdownNode.innerText = countdown;
        countdown--;
    }, 1000)

    // Faccio apparire i numeri 
})



//2) I numeri scompaiono e appaiono 5 input per inserire le risposte

// Faccio sparire i numeri 

// Modifico la scritta con le istruzioni

// Faccio apparire i 5 input

//3) Il software dice quanti e quali numeri sono stati indovinati

// Faccio sparire il timer e gli input

// Prendo i numeri inseriti dall'utente e li metto in un array
// Controllo che l'utente non inserisca due numeri uguali, in caso stampo un 
// messaggio, il resto dei casi sono già gestiti dal form
// Forse esiste un modo già settato in bootstrap per eseguire questo tipo di controllo?
// Confronto l'array di risposta con quello generato dal computer

// Stampo il messaggio finale
