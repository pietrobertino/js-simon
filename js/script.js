//1) Visualizzare in pagina 5 numeri casuali da 1 a 50 compresi.

const countdownNode = document.getElementById("countdown");
const bodyNode = document.querySelector("body");
const numberListNode = document.getElementById("numbers-list");
const instructionsNode = document.getElementById("instructions");
const formNode = document.getElementById("answers-form");

let intervalId;
let countdown = 30;

bodyNode.addEventListener("click", () => {
    // Faccio apparire il timer
    countdownNode.innerText = countdown;
    intervalId = setInterval(function () {
        countdown--;
        if (countdown>=0){
            countdownNode.innerText = countdown;
        }
        //Quando scadono i 30 secondi:
        else {
            // Il timer sparisce
            clearInterval(intervalId);
            countdownNode.innerText = "";
            // I numeri spariscono
            numberListNode.classList.add("d-none");
            // Le istruzioni cambiano
            instructionsNode.innerText = "Il tempo è scaduto! Inserisci i numeri che hai memorizzato, l'ordine non è importante";
            // Appaiono i 5 input 
            formNode.classList.remove("d-none");
        }
    }, 1000)

    // Faccio apparire i numeri 
    const numbers = getFiveNumbers();
    for (const number of numbers) {
        numberListNode.innerHTML += `<li>${number}</li>`;
    }
})




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
