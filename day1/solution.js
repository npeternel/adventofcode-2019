'use strict';

const fs = require('fs');

function day1(fileName) {
  let sum = 0;
  const data = fs.readFileSync(fileName, 'utf8');
  data.split('\n').forEach((mass) => {
    if (!mass) return;
    const massInt = parseInt(mass, 10);
    sum += Math.floor(massInt / 3) - 2;
  });
  return sum;
}

if (require.main === module) {
  const sum = day1('./input');
  console.log(`Answer is ${sum}`);
}

module.exports = day1;
