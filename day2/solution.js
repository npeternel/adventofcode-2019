'use strict';

const fs = require('fs');

function day2(stringInts) {
  const integers = stringInts.split(',').map((int) => parseInt(int, 10));
  let run = true;
  while (run) {
    for (let i = 0; i < integers.length; i += 4) {
      const a = integers[integers[i % integers.length + 1]];
      const b = integers[integers[i % integers.length + 2]];
      if (integers[i] === 99) {
        run = false;
        break;
      } else if (integers[i] === 1) {
        integers[integers[i % integers.length + 3]] = a + b;
      } else if (integers[i] === 2) {
        integers[integers[i % integers.length + 3]] = a * b;
      } else {
        throw Error(`unrecognized opcode: ${integers[i]} at index ${i}`);
      }
    }
  }
  return integers[0];
}

if (require.main === module) {
  const data = fs.readFileSync(__dirname + '/input', 'utf8');
  const sum = day2(data);
  console.log(`Answer is ${sum}`);
}

module.exports = day2;
