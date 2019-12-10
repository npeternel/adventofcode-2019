'use strict';

function solution(data) {
  const part1Answer = part1(data);
  const part2Answer = part2(data);
  console.log(`Answer is ${part1Answer} and ${part2Answer}`);
  return [part1Answer, part2Answer];
}

function part1(data) {
  let sum = 0;
  data.split('\n').forEach((mass) => {
    if (!mass) return;
    const massInt = parseInt(mass, 10);
    sum += Math.floor(massInt / 3) - 2;
  });
  return sum;
}

function part2(data) {
  let sum = 0;
  data.split('\n').forEach((mass) => {
    if (!mass) return;
    const currMass = parseInt(mass, 10);
    let result = Math.floor(currMass / 3) - 2;
    while (result > 0) {
      sum += result;
      result = Math.floor(result / 3) - 2;
    }
  });
  return sum;
}

module.exports.solution = solution;
