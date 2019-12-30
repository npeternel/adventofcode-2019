'use strict';

const { Computer } = require('../computer');

function solution(input) {
  const part1Answer = day11part1(input);
  day11part2(input);
  console.log(`Answer is ${part1Answer}`);
  return [part1Answer];
}

function day11part1(input) {
  const results = compute(input, 0);
  return Object.keys(results[0]).length;
}

function compute(input, val) {
  const computer = new Computer(input, val);
  const history = {};
  let position = [0,0,'^'];
  const changes = {};
  let lastColor = 0;
  while (!computer.halted) {
    const newColor = computer.execute({ input: lastColor, pause: true, print: false });
    const direction = computer.execute({ input: lastColor, pause: true, print: false });
    if (computer.halted) break;
    let key = `${position.slice(0,2)}`;
    // determine if there was a change in color
    if (!history[key] && newColor === 1) {
      changes[key] = 1;
    } else if (history[key] && history[key] !== newColor) {
      changes[key] = 1;
    }
    history[key] = newColor;
    position = calcDirection(position, direction);
    key = `${position.slice(0,2)}`;
    // determine the color of the new position, default color is black
    lastColor = history[key] || 0;
  }
  return [changes, history];
}

function calcDirection(p, direction) {
  let newDir;
  let newPoint;
  if (![0,1].some((i) => i === direction)) throw Error(`unknown direction: ${direction}`);
  switch (p[2]) {
    case '^':
      newDir = ['<', '>'];
      newPoint = [[p[0] - 1,p[1]],[p[0] + 1,p[1]]];
      break;
    case '<':
      newDir = ['v', '^'];
      newPoint = [[p[0],p[1] - 1],[p[0],p[1] + 1]];
      break;
    case '>':
      newDir = ['^', 'v'];
      newPoint = [[p[0],p[1] + 1],[p[0],p[1] - 1]];
      break;
    case 'v':
      newDir = ['>', '<'];
      newPoint = [[p[0] + 1,p[1]],[p[0] - 1,p[1]]];
      break;
    default:
      throw Error(`unknown direction ${p[2]}`);
  }
  return newPoint[direction].concat(newDir[direction]);
}

function day11part2(input) {
  const results = compute(input, 1);
  const grid = {};
  for (const [point, color] of Object.entries(results[1])) {
    const p = point.split(',');
    const x = p[1];
    let y = parseInt(p[0], 10);
    if (!grid[x]) grid[x] = [];
    if (y < 0) y = Math.abs(y);
    else y = 2 * y;
    if (y >= grid[x].length) {
      grid[x] = grid[x].concat(new Array(y - grid[x].length + 1).fill(0));
    }
    grid[x][y] = color;
  }
  const sorted = Object.keys(grid).sort((a, b) => {
    return parseInt(a, 10) - parseInt(b, 10);
  });
  for (const r of sorted) {
    const row = grid[r];
    let msg = '';
    for (const col of row) {
      if (col === 1) msg += '▓';
      else if (col === 0) msg += '░';
      else msg += ' ';
    }
    console.log(msg);
  }
}

module.exports.solution = solution;
