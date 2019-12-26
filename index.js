'use strict';

const fs = require('fs');
const exec = require('child_process').exec;

const solutions = {
  day1: require('./day1/solution'),
  day2: require('./day2/solution'),
  day3: require('./day3/solution'),
  day4: require('./day4/solution'),
  day5: require('./day5/solution'),
  day6: require('./day6/solution'),
  day7: require('./day7/solution')
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
  const part1Answer = ${day}part1(input);
  const part2Answer = ${day}part2(input);
  console.log(\`Answer is \${part1Answer}\ and \${part2Answer}\`);
  return [part1Answer, part2Answer];
}

function ${day}part1(input) {
  return;
}

function ${day}part2(input) {
  return;
}
      
module.exports.solution = solution;
`);
      fs.writeFileSync(__dirname + '/' + day + '/solution.test.js', `'use strict';

const test = require('tape');
const { solution } = require('./solution');

test('${day} part 1', (assert) => {
  // let actual = solution('');
  // assert.equals(actual[0], '', 'correct answer');
  assert.end();
});

test('${day} part 2', (assert) => {
  // let actual = solution('');
  // assert.equals(actual[1], '', 'correct answer');
  assert.end();
});
`);
      break;
    case 'run':
      const input = fs.readFileSync(__dirname + '/' + day + '/input', 'utf8');
      solutions[day].solution(input);
      break;
    default:
  }
}
