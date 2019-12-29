'use strict';

const test = require('tape');
const { solution } = require('./solution');

test('day9 part 1', (assert) => {
  let actual = solution('109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99');
  assert.equals(actual[0], 99, 'correct answer');
  actual = solution('1102,34915192,34915192,7,4,7,99,0');
  assert.equals(actual[0], 1219070632396864, 'correct answer');
  actual = solution('104,1125899906842624,99');
  assert.equals(actual[0],1125899906842624, 'correct answer');
  assert.end();
});

test('day9 part 2', (assert) => {
  // let actual = solution('');
  // assert.equals(actual[1], '', 'correct answer');
  assert.end();
});
