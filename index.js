'use strict';

const fs = require('fs');
const exec = require('child_process').exec;

const solutions = {
  day1: require('./day1/solution'),
  day2: require('./day2/solution'),
  day3: require('./day3/solution'),
  day4: require('./day4/solution')
}

if (require.main === module) {
  const day = process.argv[3];
  if (!/day\d+/.test(day)) { throw Error(`invalid day '${day}'`); }
  switch (process.argv[2]) {
    case 'new':
      exec(`git checkout -b ${day}`, function(err){
        if (err) throw err;
      });
      fs.mkdirSync(__dirname + '/' + day, '0755');
      fs.writeFileSync(__dirname + '/' + day + '/input', '');
      fs.writeFileSync(__dirname + '/' + day + '/solution.js', `'use strict';

function solution(input) {
  console.log(\`Answer is \${answer}\`);
}
      
module.exports.solution = solution;
`);
      fs.writeFileSync(__dirname + '/' + day + '/solution.test.js', `'use strict';

const test = require('tape');
const { solution } = require('./solution');
`);
      break;
    case 'run':
      const input = fs.readFileSync(__dirname + '/' + day + '/input', 'utf8');
      solutions[day].solution(input);
      break;
    default:
  }
}
