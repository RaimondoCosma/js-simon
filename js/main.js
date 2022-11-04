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
let pcNumbers = [];
while ( pcNumbers.length < 5 ){
    let random = getRndInteger(1, 100)
    if ( !pcNumbers.includes(random) ){
        pcNumbers.push(random);
    }
}
console.log(pcNumbers);