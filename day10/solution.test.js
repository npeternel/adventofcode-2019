'use strict';

const test = require('tape');
const { day10part1, day10part2 } = require('./solution');

test('day10 part 1', (assert) => {
  let actual = day10part1(`.#..#
.....
#####
....#
...##`);
  assert.equals(actual[0], 8, 'correct answer');
  actual = day10part1(`......#.#.
#..#.#....
..#######.
.#.#.###..
.#..#.....
..#....#.#
#..#....#.
.##.#..###
##...#..#.
.#....####`);
  assert.equals(actual[0], 33, 'correct answer');
  assert.end();
});

test.only('day10 part 2', (assert) => {
  let input = `.#....#####...#..
##...##.#####..##
##...#...#.#####.
..#.....#...###..
..#.#.....#....##`;
  let answers = {
    1: 801, 2: 900, 3: 901, 4: 1000, 5: 902, 6: 1101, 7: 1201, 32: 1001,
    33: 1400, 34: 1601
  };
  let actual;
  for (const [n,answer] of Object.entries(answers)) {
    actual = day10part2(input, [8, 3], parseInt(n, 10));
    assert.equals(actual, answer, 'correct answer');
  }
  input = `.#..##.###...#######
##.############..##.
.#.######.########.#
.###.#######.####.#.
#####.##.#.##.###.##
..#####..#.#########
####################
#.####....###.#.#.##
##.#################
#####.##.###..####..
..######..##.#######
####.##.####...##..#
.#####..#.######.###
##...#.##########...
#.##########.#######
.####.#.###.###.#.##
....##.##.###..#####
.#.#.###########.###
#.#.#.#####.####.###
###.##.####.##.#..##`;
  answers = {
    1: 1112, 2: 1201, 3: 1202, 10: 1208, 20: 1600, 50: 1609, 100: 1016, 199: 906, 200: 802, 201: 1009, 299: 1101 };
  for (const [n,answer] of Object.entries(answers)) {
    actual = day10part2(input, [11, 13], parseInt(n, 10));
    assert.equals(actual, answer, 'correct answer');
  }
  assert.end();
});
