'use strict';

const test = require('tape');
const day1 = require('./solution');

test('day1', (assert) => {
  const sum = day1(__dirname + '/testinput');
  assert.equals(sum, 34241, 'correct total fuel');
  assert.end();
});

