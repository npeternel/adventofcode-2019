'use strict';

const fs = require('fs');

const solutions = {
  day1: require('./day1/solution'),
  day2: require('./day2/solution'),
  day3: require('./day3/solution')
}

if (require.main === module) {
  const day = process.argv[2];
  if (!/day\d+/.test(day)) { throw Error(`invalid day '${day}'`); }
  const input = fs.readFileSync(__dirname + '/' + day + '/input', 'utf8');
  solutions[day].solution(input);
}
