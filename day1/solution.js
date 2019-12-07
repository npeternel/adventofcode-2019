'use strict';

function solution(data) {
  let sum = 0;
  data.split('\n').forEach((mass) => {
    if (!mass) return;
    const massInt = parseInt(mass, 10);
    sum += Math.floor(massInt / 3) - 2;
  });
  console.log(`Answer is ${sum}`);
  return sum;
}

module.exports.solution = solution;
