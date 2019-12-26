'use strict';

const test = require('tape');
const { solution } = require('./solution');

test('day8 part 1', (assert) => {
  let actual = solution('0'.repeat(150) + '0'.repeat(148) + '12');
  assert.equals(actual[0], 1, 'correct answer');
  actual = solution('0'.repeat(150) + '22' + '0'.repeat(147) + '1');
  assert.equals(actual[0], 2, 'correct answer');
  assert.end();
});

test('day8 part 2', (assert) => {
  // let actual = solution('');
  // assert.equals(actual[1], '', 'correct answer');
  assert.end();
});
