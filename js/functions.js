
// Funzione che restituisce un numero da 1 a 50 compresi

function getNumber1to50() {
    return Math.floor(Math.random() * 50) + 1;
}

// Funzione che restituisce un array di 5 numeri da 1 a 50 
// senza ripetizioni

function getFiveNumbers() {

    arr = [getNumber1to50()];
    
    for (let i=0; i<4;){
        const numb = getNumber1to50();
        // SE il numero generato non è presente 
        if (!(arr.includes(numb))){
            //lo aggiungo all'array
            arr.push(numb);
            //incremento il contatore
            i++;
        }
    }
    return arr;
}