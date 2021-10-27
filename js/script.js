const numeroValori = 5;
const arrayNumeriRandom = [];
let arrayRandom;
let arrayUtente = [];

let errori = 0;

function numeriRandom(min, max) {

    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroRandom;
}

function popolareArray() {

    for (let i = 0; i < numeroValori; i++) {
        arrayNumeriRandom[i] = numeriRandom(0, 100).toString();
    }

    const arrayDaStampare = [];
    for (let i = 0; i < arrayNumeriRandom.length; i++) {
        arrayDaStampare[i] = arrayNumeriRandom[i].toString();
    }
    console.log("Numeri da ricordare: " + arrayNumeriRandom);
    console.log(`Numero valori: ${numeroValori}`);

    alert(`Memorizza questi numeri:\n${arrayDaStampare}`.replaceAll(",", " - "));

    return arrayNumeriRandom;
}

arrayRandom = popolareArray();
console.log("length random: " + arrayRandom.length);

function inserireNumeri() {
    let arrayUtente = prompt("Inserisci i numeri che ricordi, separati da una virgola: ").split(",");
    console.log("Array utente: " + arrayUtente);
    confronto(arrayRandom, arrayUtente);
}
setTimeout(inserireNumeri, 1000);





function confronto(array1, array2) {
    console.log(array1, array1.length);
    console.log(array2, array2.length);

    for (let i = 0; i < array1.length; i++) {

        if (array1.includes(array2[i])) {
            console.log(`Valore ${array2[i]} corretto`);
        } else {
            errori++;
            console.log(`Valore ${array2[i]} errato`);
        }

    }
    console.log(`Hai commesso: ${errori} errori`);
}

