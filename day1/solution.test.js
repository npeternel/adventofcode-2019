'use strict';

const test = require('tape');
const fs = require('fs');
const { solution } = require('./solution');

test('day1 part 1', (assert) => {
  const input = fs.readFileSync(__dirname + '/testinput', 'utf8');
  const sum = solution(input);
  assert.equals(sum[0], 34241, 'correct total fuel');
  assert.end();
});

test('day1 part 2', (assert) => {
  let sum = solution('14');
  assert.equals(sum[1], 2, 'correct total fuel');
  sum = solution('1969');
  assert.equals(sum[1], 966, 'correct total fuel');
  sum = solution('100756');
  assert.equals(sum[1], 50346, 'correct total fuel');
  assert.end();
});
