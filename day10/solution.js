'use strict';

function solution(input) {
  const part1Answer = day10part1(input);
  const part2Answer = day10part2(input, part1Answer[1], 200);
  console.log(`Answer is ${part1Answer[0]} and ${part2Answer}`);
  return [part1Answer[0], part2Answer];
}

function day10part1(input) {
  const asteroids = getAsteroids(input);
  return findTarget(asteroids);
}

function day10part2(input, laser, n) {
  const asteroids = getAsteroids(input);
  const angles = {};
  for (const ast of asteroids) {
    // this asteroid is itself
    if (laser[0] === ast[0] && laser[1] === ast[1]) continue;
    const angle = calcAngle(laser, ast);
    const dist = calcDist(laser, ast);
    if (!angles[angle]) angles[angle] = {};
    angles[angle][dist] = ast;
  }
  const start = '-90';
  const sortedAngles = [];
  let i;
  Object.keys(angles)
    .sort((a, b) => {
      return b - a;
    })
    .forEach((angle, j) => {
      if (angle === start) i = j;
      sortedAngles.push(angles[angle]);
    });
  if (!i) throw Error('could not find starting angle');
  let a = 0;
  let curr;
  while (a !== n) {
    if (Object.entries(sortedAngles[i]).length === 0) {
      i += 1;
      if (i === sortedAngles.length) i = 0;
      continue;
    }
    const next = Object.keys(sortedAngles[i]).sort((a, b) => {
      return parseInt(a, 10) - parseInt(b, 10);
    })[0];
    curr = JSON.stringify(sortedAngles[i][next]);
    delete sortedAngles[i][next];
    i += 1;
    if (i === sortedAngles.length) i = 0;
    a += 1;
  }
  curr = JSON.parse(curr);
  return curr[0] * 100 + curr[1];
}

function getAsteroids(input) {
  const rows = input.split('\n');
  const asteroids = [];
  for (const [i, row] of rows.entries()) {
    for (const [j, char] of row.split('').entries()) {
      if (char === '.') continue;
      else asteroids.push([j, i]);
    }
  }
  return asteroids;
}

function findTarget(asteroids) {
  let max = 0;
  let coords;
  for (const ast of asteroids) {
    const inScope = Array.from(asteroids);
    const angles = {};
    let visible = 0;
    while (inScope.length !== 0) {
      const curr = inScope.shift();
      // this asteroid is itself
      if (curr[0] === ast[0] && curr[1] === ast[1]) continue;
      const angle = calcAngle(ast, curr);
      if (angles[angle]) continue;
      angles[angle] = 1;
      visible += 1;
    }
    if (max < visible) {
      max = visible;
      coords = ast;
    }
  }
  return [max, coords];
}

function calcAngle(p1, p2) {
  const numer = p1[1] - p2[1];
  const denom = p1[0] - p2[0];
  return Math.atan2(-numer, denom) * 180 / Math.PI;
}

function calcDist(p1, p2) {
  return Math.sqrt(Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[0] - p2[0], 2));
}

module.exports.solution = solution;
module.exports.day10part1 = day10part1;
module.exports.day10part2 = day10part2;
