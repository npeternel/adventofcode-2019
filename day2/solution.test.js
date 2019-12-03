'use strict';

const test = require('tape');
const day2 = require('./solution');

test('day2', (assert) => {
  const testInputs = { '1,0,0,0,99': 2, '1,9,10,3,2,3,11,0,99,30,40,50': 3500,
    '2,3,0,3,99': 2, '2,4,4,5,99,0': 2, '1,1,1,4,99,5,6,0,99': 30 };
  for (const key of Object.keys(testInputs)) {
    const sum = day2(key);
    assert.equals(sum, testInputs[key], `correct value for input ${key}`);
  }
  assert.end();
});
