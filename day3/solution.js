'use strict';

function solution(input) {
  const [wire1, wire2] = input.split('\n');
  const grid = {};
  addToGrid(wire1, grid, true);
  const intersections = addToGrid(wire2, grid, false);
  const smallestManhattan = Math.min(...intersections.map((intersection) => manhattanDistance(intersection)));
  const smallestSteps = Math.min(...intersections.map((intersection) => intersection[2]));
  console.log(`Answer is ${smallestManhattan} and ${smallestSteps}`);
  return [smallestManhattan, smallestSteps];
}

function addToGrid(wirePath, grid, add) {
  const intersections = [];
  let prev = [0, 0];
  let steps = 0;
  wirePath.split(',').forEach((action) => {
    const axis = action[0];
    const distance = parseInt(action.slice(1), 10);
    switch (axis) {
      case 'L':
        for (let i = prev[0]; i >= (prev[0] - distance); i -= 1) {
          if (add && !grid[`${prev[1]},${i}`]) grid[`${prev[1]},${i}`] = steps;
          else if (grid[`${prev[1]},${i}`] && !equals([i, prev[1]], prev)) intersections.push([prev[1], i, grid[`${prev[1]},${i}`] + steps]);
          steps += 1;
        }
        steps -= 1;
        prev = [prev[0] - distance, prev[1]];
        break;
      case 'R':
        for (let i = prev[0]; i <= (prev[0] + distance); i += 1) {
          if (add && !grid[`${prev[1]},${i}`]) grid[`${prev[1]},${i}`] = steps;
          else if (grid[`${prev[1]},${i}`] && !equals([i, prev[1]], prev)) intersections.push([prev[1], i, grid[`${prev[1]},${i}`] + steps]);
          steps += 1;
        }
        steps -= 1;
        prev = [prev[0] + distance, prev[1]];
        break;
      case 'D':
        for (let j = prev[1]; j <= (prev[1] + distance); j += 1) {
          if (add && !grid[`${j},${prev[0]}`]) grid[`${j},${prev[0]}`] = steps;
          else if (grid[`${j},${prev[0]}`] && !equals([prev[0], j], prev)) intersections.push([j, prev[0], grid[`${j},${prev[0]}`] + steps]);
          steps += 1;
        }
        steps -= 1;
        prev = [prev[0], prev[1] + distance];
        break;
      case 'U':
        for (let j = prev[1]; j >= (prev[1] - distance); j -= 1) {
          if (add && !grid[`${j},${prev[0]}`]) grid[`${j},${prev[0]}`] = steps;
          else if (grid[`${j},${prev[0]}`] && !equals([prev[0], j], prev)) intersections.push([j, prev[0], grid[`${j},${prev[0]}`] + steps]);
          steps += 1;
        }
        steps -= 1;
        prev = [prev[0], prev[1] - distance];
        break;
      default:
    }
  });
  return intersections;
}

function manhattanDistance(point) {
  if (point[0] === 0 && point[1] === 0) return -1;
  return Math.abs(point[0]) + Math.abs(point[1]);
}

function equals(point1, point2) {
  return JSON.stringify(point1) === JSON.stringify(point2);
}

module.exports.solution = solution;
