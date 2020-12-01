const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(i => parseInt(i));

const part1 = () => {
  let result = [];

  for(i=0; i<tableau.length; i++) {
    for(j=0; j<tableau.length; j++) {
      if(tableau[i] + tableau[j] === 2020) {
        result = tableau[i] * tableau[j];
      }
    }
    return result;
};

const part2 = () => {
  let result = [];

  for(i=0; i<tableau.length; i++) {
    for(j=0; j<tableau.length; j++) {
      for(k=0; k<tableau.length; k++) {
        if(tableau[i] + tableau[j] + tableau[k] === 2020) {
          result = tableau[i] * tableau[j] * tableau[k];
        }
      }
    }
  }
  return result;
};

console.log('Partie 1: ', part1());
console.log('Partie 2: ', part2());
