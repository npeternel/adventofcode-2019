'use strict';

const { Computer } = require('../computer');

function solution(input) {
  const part1Answer = day9part1(input);
  const part2Answer = day9part2(input);
  console.log(`Answer is ${part1Answer} and ${part2Answer}`);
  return [part1Answer, part2Answer];
}

function day9part1(input) {
  const computer = new Computer(input, 1);
  const output = computer.execute();
  if (computer.invalid) throw Error('invalid program');
  return output;
}

function day9part2(input) {
  const computer = new Computer(input, 2);
  const output = computer.execute();
  if (computer.invalid) throw Error('invalid program');
  return output;
}

module.exports.solution = solution;
