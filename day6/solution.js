'use strict';

function solution(input) {
  const orbits = input.split('\n');
  const root = build(orbits);
  const part1Answer = day6part1(root);
  const part2Answer = day6part2(root);
  console.log(`Answer is ${part1Answer} and ${part2Answer}`);
  return [part1Answer, part2Answer];
}

class planet {
  constructor(name) {
    this.name = name;
    this.orbits;
  }

  count() {
    return this.orbits ? 1 + this.orbits.count() : 0;
  }

}

function day6part1(root) {
  const counts = [];
  for (const p of Object.values(root)) {
    counts.push(p.count());
  }
  return counts.reduce((a, b) => a + b);
}

function day6part2(root) {
  if (!root['YOU']) return;
  const you = root['YOU'];
  let next = you.orbits;
  const youJumps = [];
  while (next && next.name !== 'COM') {
    youJumps.push(next.name);
    next = next.orbits;
  }
  const san = root['SAN'];
  next = san.orbits;
  const sanJumps = [];
  while (next && next.name !== 'COM') {
    sanJumps.push(next.name);
    next = next.orbits;
  }
  const overlap = youJumps.filter((p) => sanJumps.includes(p));
  return youJumps.indexOf(overlap[0]) + sanJumps.indexOf(overlap[0]);
}

function build(orbits) {
  const root = {};
  orbits.forEach((orbit) => {
    const [a, b] = orbit.split(')');
    if (!root[a]) root[a] = new planet(a);
    if (!root[b]) root[b] = new planet(b);
  });
  orbits.forEach((orbit) => {
    const [a, b] = orbit.split(')');
    root[b].orbits = root[a];
  });
  return root;
}

module.exports.solution = solution;
