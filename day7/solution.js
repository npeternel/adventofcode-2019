'use strict';

const { Computer } = require('../computer');

function solution(input) {
  const part1Answer = day7part1(input);
  const part2Answer = day7part2(input);
  console.log(`Answer is ${part1Answer} and ${part2Answer}`);
  return [part1Answer, part2Answer];
}

function day7part1(input) {
  const amps = [0,1,2,3,4];
  let maxOutput = -1;
  allCombos(amps).forEach((combo) => {
    let inOut = 0;
    for (let i = 0; i < combo.length; i++) {
      const computer = new Computer(input, combo[i]);
      inOut = computer.execute(inOut, false);
      maxOutput = Math.max(maxOutput, inOut);
    }
  });
  return maxOutput;
}

function day7part2(input) {
  const amps = [5,6,7,8,9];
  let maxOutput = -1;
  allCombos(amps).forEach((combo) => {
    const computers = combo.map((i) => new Computer(input, i));
    let inOut = 0;
    while (computers.length !== 0) {
      const currComp = computers.shift();
      inOut = currComp.execute(inOut, true);
      if (!currComp.halted) {
        computers.push(currComp);
        if (!currComp.invalid) maxOutput = Math.max(inOut, maxOutput);
      }
    }
  });
  return maxOutput;
}

function allCombos(arr) {
  const results = [];
  if (arr.length === 1) {
    results.push(arr);
    return results;
  }
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const remainder = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainderResults = allCombos(remainder);
    for (let j = 0; j < remainderResults.length; j++) {
      results.push([first].concat(remainderResults[j]));
    }
  }
  return results;
}

module.exports.solution = solution;
