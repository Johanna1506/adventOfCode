const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');



const part1 = () => {
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    let count = 0
    let splitChar = input[i].split(":");

    let letterSelect = splitChar[0].substr(splitChar[0].length -1);

    let [nb1, nb2] = splitChar[0].slice(0, -1).split('-');

    for(letter of splitChar[1]) {
      if (letter === letterSelect){
        count++;
      }
    }
     if(count>= nb1 && count <= nb2) {
       result++;
     }
  }
  return result
}

const part2 = () => {
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    let count = 0
    let splitChar = input[i].split(":");

    let letterSelect = splitChar[0].substr(splitChar[0].length -1);

    let [nb1, nb2] = splitChar[0].slice(0, -1).split('-');

    if (letterSelect === splitChar[1][parseInt(nb1)] || letterSelect === splitChar[1][parseInt(nb2)]){
      if(splitChar[1][parseInt(nb1)] !== splitChar[1][parseInt(nb2)] ) {
        result++;
      }
    }
  }

  return result;
}


console.log("Part 1", part1())
console.log("Part 2", part2())
