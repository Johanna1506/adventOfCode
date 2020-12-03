const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');

function slopeTrees(xPosi, yPosi) {
  let [x, y] = [0,0];
  let trees = 0;

  while (y < input.length) {
    x = x % input[y].length;
    if(input[y][x] === "#") {
      trees++;
    }
    x += xPosi;
    y += yPosi;
  }
  return trees
}

const part1 = () => {
  return slopeTrees(3,1);
}

const part2 = () => {

  let move1 = slopeTrees(1, 1);
  let move2 = slopeTrees(3,1);
  let move3 = slopeTrees(5, 1);
  let move4 = slopeTrees(7, 1);
  let move5 = slopeTrees(1, 2);

  let trees = move1 * move2 * move3 * move4 * move5

  return trees;
}

console.log("Part 1", part1())
console.log("Part 2", part2())
