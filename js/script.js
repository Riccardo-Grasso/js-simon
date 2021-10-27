let counter = 0;
const arrayNumeriRandom = [];
const arrayUtente = [];


const arrayRandomOrdinato = popolareArray();
const arrayUtenteOrdinato = inserireNumeri();


function numeriRandom(min, max) {

    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroRandom;
}


function popolareArray() {

    for (let i = 0; i < 5; i++) {
        arrayNumeriRandom[i] = numeriRandom(0, 100);
        counter++;
    }

    const arrayDaStampare = [];
    for (let i = 0; i < arrayNumeriRandom.length; i++) {
        arrayDaStampare[i] = arrayNumeriRandom[i].toString();
    }
    console.log("Numeri da ricordare: " + arrayNumeriRandom);
    console.log(`Numero valori: ${counter}`);

    const arrayRandomOrdinato = arrayNumeriRandom.sort((a, b) => a - b);
    console.log("Array random ordinato: " + arrayRandomOrdinato);

    alert(`Memorizza questi numeri:\n${arrayDaStampare}`.replaceAll(",", " - "));

    return {
        arrayRandomOrdinato,
        counter
    };
}



function inserireNumeri() {
    for (let i = 0; i < counter; i++) {
        arrayUtente.push(prompt("Inserisci i numeri che ricordi, uno alla volta: "));
    }
    console.log("Array utente: " + arrayUtente);

    const arrayUtenteOrdinato = arrayUtente.sort((a, b) => a - b);
    console.log("Array utente ordinato: " + arrayUtenteOrdinato);

    return arrayUtenteOrdinato;
}
setTimeout(inserireNumeri, 5000);


function confronto(array1, array2) {


    for (let i = 0; i < 5; i++) {
        if (array1[i] == array2[i]) {
            console.log(`Numero: ${array1[i]} indovinato`);
        } else {
            console.log(`Numero: ${array1[i]} indovinato`);
        }
    }
}

confronto(arrayRandomOrdinato, arrayUtenteOrdinato);