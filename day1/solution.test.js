'use strict';

const test = require('tape');
const fs = require('fs');
const { solution } = require('./solution');

test('day1', (assert) => {
  const input = fs.readFileSync(__dirname + '/testinput', 'utf8');
  const sum = solution(input);
  assert.equals(sum, 34241, 'correct total fuel');
  assert.end();
});

