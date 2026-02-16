
// Funzione che restituisce un numero da 1 a 50 compresi

function getNumber1to50() {
    return Math.floor(Math.random() * 50) + 1;
}

// Funzione che restituisce un array di 5 numeri da 1 a 50 
// senza ripetizioni

function getFiveNumbers() {

    arr = [getNumber1to50()];

    while (arr.length < 5) {
        const numb = getNumber1to50();
        // SE il numero generato non è presente 
        if (!(arr.includes(numb))) {
            //lo aggiungo all'array
            arr.push(numb);
        }
    }
    return arr;
}

function compareArrays(arr1, arr2) {
    let numb = 0;
    let list = [];
    for (let i = 0; i < arr1.length; i++){ 
        for (let k = 0; k < arr2.length; k++){
            if (arr1[i] == arr2[k]){
                numb++;
                list.push(arr1[i]);
            }
        }
    }
    return [numb, list];
}
