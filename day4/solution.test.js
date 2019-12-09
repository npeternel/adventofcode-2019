'use strict';

const test = require('tape');
const { solution } = require('./solution');

test('day 4 part 1', (assert) => {
  const actual = solution('111111,111115');
  assert.equals(actual[0], 5, 'correct count');
  assert.end();
});

test('day 4 part 2', (assert) => {
  let actual = solution('111111,111115');
  assert.equals(actual[1], 0, 'correct count');
  actual = solution('111111,111122');
  assert.equals(actual[1], 1, 'correct count');
  assert.end();
});
