'use strict';

const test = require('tape');
const { solution } = require('./solution');

test('day 6 part 1', (assert) => {
  const sum = solution(['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L'].join('\n'));
  assert.equals(sum[0], 42, 'correct orbit sum');
  assert.end();
});

test('day 6 part 2', (assert) => {
  const sum = solution(['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L', 'K)YOU', 'I)SAN'].join('\n'));
  assert.equals(sum[1], 4, 'correct jumps');
  assert.end();
});
