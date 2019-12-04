'use strict';

const fs = require('fs');

function day2part1(stringInts) {
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

function day2part2(stringInts) {
  const newInts = stringInts.split(',').map((int) => parseInt(int, 10));
  let integers = Array.from(newInts);
  let run = true;
  let m = 0;
  let n = 0;
  while (run) {
    integers = Array.from(newInts);
    integers[1] = m;
    integers[2] = n;
    for (let i = 0; i < integers.length; i += 4) {
      const a = integers[integers[i % integers.length + 1]];
      const b = integers[integers[i % integers.length + 2]];
      if (integers[i] === 1) {
        integers[integers[i % integers.length + 3]] = a + b;
      } else if (integers[i] === 2) {
        integers[integers[i % integers.length + 3]] = a * b;
      } else {
        if (integers[0] === 19690720) {
          run = false;
          break;
        }
        if (m === 100) {
          m = 0;
          n += 1;
        } else if (n === 100) {
          throw Error('no solution up to values of 100');
        } else {
          m += 1;
        }
        break;
      }
    }
  }
  return [m, n];
}

if (require.main === module) {
  const data = fs.readFileSync(__dirname + '/input', 'utf8');
  let answer = day2part1(data);
  console.log(`Answer is for part 1 is ${answer}`);
  answer = day2part2(data);
  console.log(`Answer is for part 2 is ${answer[0]} and ${answer[1]}`);
}

module.exports = day2part1;
