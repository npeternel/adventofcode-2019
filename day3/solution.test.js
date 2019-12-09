'use strict';

const test = require('tape');
const { solution } = require('./solution');

test('day 3 part 1', (assert) => {
  let actual = solution('R8,U5,L5,D3\nU7,R6,D4,L4');
  assert.equals(actual[0], 6, 'correct Manhattan distance');
  actual = solution('R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83');
  assert.equals(actual[0], 159, 'correct Manhattan distance');
  actual = solution('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7');
  assert.equals(actual[0], 135, 'correct Manhattan distance');
  assert.end();
});

test('day 3 part 2', (assert) => {
  let actual = solution('R8,U5,L5,D3\nU7,R6,D4,L4');
  assert.equals(actual[1], 30, 'correct steps');
  actual = solution('R75,D30,R83,U83,L12,D49,R71,U7,L72\nU62,R66,U55,R34,D71,R55,D58,R83');
  assert.equals(actual[1], 610, 'correct steps');
  actual = solution('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51\nU98,R91,D20,R16,D67,R40,U7,R15,U6,R7');
  assert.equals(actual[1], 410, 'correct steps');
  assert.end();
});
