function numeriRandom(min, max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroRandom;
}


function popolareArray() {
    const arrayNumeriRandom = [];
    for (let i = 0; i < 5; i++) {
        arrayNumeriRandom[i] = numeriRandom(0, 100);
    }

    const arrayDaStampare = [];
    for (let i = 0; i < arrayNumeriRandom.length; i++) {
        arrayDaStampare[i] = arrayNumeriRandom[i].toString();
    }

    swal("Memorizza questi numeri!", `${arrayDaStampare}`.replaceAll(",", " - "));
    console.log("Numeri da ricordare: " + arrayNumeriRandom);

    return arrayNumeriRandom;
}

popolareArray();
