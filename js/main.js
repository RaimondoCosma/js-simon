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
    numberItem.classList.add('box__number')
    randomNumbers.append(numberItem);
    numberItem.append(random);
}
console.log(pcNumbers);