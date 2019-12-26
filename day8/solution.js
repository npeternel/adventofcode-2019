'use strict';

function solution(input) {
  const part1Answer = day8part1(input);
  const part2Answer = day8part2(input);
  console.log(`Answer is ${part1Answer} and ${part2Answer}`);
  return [part1Answer, part2Answer];
}

function day8part1(input) {
  let minLayer;
  let leastZeros = 160;
  for (let i = 0; i < input.length; i += 150) {
    const zeros = count(input.slice(i,i + 150),'0');
    if (zeros < leastZeros) {
      leastZeros = zeros;
      minLayer = i;
    }
  }
  const sliced = input.slice(minLayer, minLayer + 150);
  return count(sliced, '1') * count(sliced, '2');
}

function count(str, s) {
  return (str.match(new RegExp(s, 'g')) || []).length;
}

function day8part2(input) {
  const image = new Array(150);
  for (let i = 0; i < input.length; i += 1) {
    switch (image[i % 150]) {
      case '0':
        break;
      case '1':
        break;
      case '2':
        image[i % 150] = input.charAt(i);
        break;
      default:
        image[i % 150] = input.charAt(i);
    }
  }
  for (let i = 0; i < image.length; i += 25) {
    let msg = '';
    for (let j = i; j < i + 25; j += 1) {
      switch (image[j]) {
        case '0':
          msg += '░';
          break;
        case '1':
          msg += '▓';
          break;
        case '2':
          msg += ' ';
          break;
        default:
      }
    }
    console.log(msg);
  }
  // console.log('■'
  return;
}

module.exports.solution = solution;
