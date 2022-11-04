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
},4000)

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
    if ( pcNumbers.includes(userRandomNumber) ){
        alert('Complimenti hai vinto');
    } else {
        alert('Bottoni');
    }
},6000)
console.log(userNumbers);





