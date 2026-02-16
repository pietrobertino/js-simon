
const countdownNode = document.getElementById("countdown");
const numberListNode = document.getElementById("numbers-list");
const instructionsNode = document.getElementById("instructions");
const formNode = document.getElementById("answers-form");
const inputNodes = document.getElementsByClassName("form-control");


let intervalId;
let countdown = 30;
const numbers = getFiveNumbers();

//Quando l'utente inizia a giocare

instructionsNode.addEventListener("click", () => {

    // Faccio apparire il timer
    countdownNode.innerText = countdown;
    intervalId = setInterval(function () {
        countdown--;
        if (countdown >= 0) {
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
    }, 100) //cambio momentaneo

    // Faccio apparire i numeri 
    for (const number of numbers) {
        numberListNode.innerHTML += `<li>${number}</li>`;
    }

})

// Quando l'utente invia il form
formNode.addEventListener("submit", (event) => {
    //blocco il refresh della pagina
    event.preventDefault();

    // salvo i valori inseriti dall'utente all'interno di un array
    const answers = [];
    for (const inputNode of inputNodes) {
        answers.push(inputNode.value);
    }

    // Confronto l'array di risposta con quello generato dal computer
    let results = compareArrays(answers, numbers);
    
    // Stampo il messaggio finale
    instructionsNode.innerText = `Hai dato ${results[0]} risposte corrette!`;
    for (let i = 0; i < results[1].length; i++){
        instructionsNode.innerText += " " + results[1][i];
    }
    
    // Faccio sparire gli input
    formNode.classList.add("d-none");
})


