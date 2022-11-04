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
        pcNumbers.push(random);
    }
    let numberItem = document.createElement('div');
    numberItem.classList.add('box__number');
    randomNumbers.append(numberItem);
    numberItem.append(random);
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
    if ( pcNumbers.includes(userRandomNumber) ){
        banner.innerHTML = `<div style="background-color: blue;padding: .625rem 1.875rem;color: white;font-weight: bold;">Complimenti hai indovinato tutti i numeri</div>`
    } else {
        banner.innerHTML = `<div style="background-color: red;padding: .625rem 1.875rem;color: white;font-weight: bold;">Mi dispiace i numeri non corrispondono</div>`
    }
    randomNumbers.classList.remove('hide');
},31000)
console.log(userNumbers);





