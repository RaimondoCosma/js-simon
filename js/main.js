'use strict';
/*---------------------
    FUNCTIONS
---------------------*/
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

  /*---------------------
    MAIN
---------------------*/
// Dichiaro funzione relativa al #random-number del mio DOM
const randomNumbers = document.getElementById('random-number');

let pcNumbers = [];
while ( pcNumbers.length < 5 ){
    let random = getRndInteger(1, 100)
    if ( !pcNumbers.includes(random) ){
        let numberItem = document.createElement('div');
        numberItem.classList.add('box__number');
        randomNumbers.append(numberItem);
        pcNumbers.push(random);
        numberItem.append(random);
    }
}
console.log(pcNumbers);

// Imposto il timeout relativo alla scomparsa dei numeri del pc
setTimeout(function(){
    randomNumbers.classList.add('hide');
},30000)

// Creo funzione relativa al #user-choise del mio DOM
const userChoise = document.getElementById('user-choise');

// Creo un nuovo array per inserire i numeri selezionati dall'utente
let userNumbers = [];

// Imposto il timeout relativo alla comparsa dei prompt
let userRandomNumber;
setTimeout(function(){
    for ( let i = 0; i < 5; i++ ){
        // Inserisco i numeri dell'utente dentro l'array appena creato
        userRandomNumber = Number((prompt(`Inserisci un numero - ${i + 1} di 5:`)));
        userNumbers.push(userRandomNumber);     
        // Inserisco i numeri dell'utente nel mio DOM   
        let numberItem = document.createElement('div');
        numberItem.classList.add('box__number');
        userChoise.append(numberItem);
        numberItem.append(userRandomNumber);            
    }
    // Creo funzione relativa alla freccia
    const arrow = document.querySelector('.arrow');
    arrow.classList.add('show');
    // Creo funzione relativa al banner
    const banner = document.getElementById('banner');
    // Creo le condizioni di vittoria
        if (pcNumbers.join() !== userNumbers.join()) {
            banner.innerHTML = `<div style="background-color: red;padding: .625rem 1.875rem;color: white;font-weight: bold;">Mi dispiace i numeri non corrispondono</div>`
        } else {
            banner.innerHTML = `<div style="background-color: blue;padding: .625rem 1.875rem;color: white;font-weight: bold;">Complimenti hai indovinato tutti i numeri</div>`
        }
        console.log(`Numeri da indovinare: ${pcNumbers.join()} --> Numeri inseriti dall'utente: ${userNumbers.join()}`);
        let i = pcNumbers.length
        while ( i-- ){
            if ( pcNumbers[i] !== userNumbers[i] ){
                console.log(`Numero sbagliato: Numero PC: ${pcNumbers[i]} - Il tuo Numero: ${userNumbers[i]}`)
            } else {
                console.log(`Numero giusto: Numero PC: ${pcNumbers[i]} - Il tuo Numero: ${userNumbers[i]}`)
            }
        }
    randomNumbers.classList.remove('hide');
},30500)
console.log(userNumbers);

// Dichiaro variabile associata al countdown del DOM
const countDown = document.querySelector('.countdown');

// Imposto un countdown per il tempo a disposizione a memorizzare i numeri
let i = 29;
const timer = setInterval(function(){
    countDown.innerHTML = `<div style="font-size: 28px; font-weight: bold; text-align: center;">${i}</div>`;
    i--
    if ( i === -1 ){
        clearInterval(timer);
    }
},1000)




