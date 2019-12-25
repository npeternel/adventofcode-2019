'use strict';

function solution(input) {
  day5part1(input, 1);
  day5part2(input, 5);
}

function day5part1(stringInts, input) {
  const ints = stringInts.split(',');
  let run = true;
  let i = 0;
  while (run) {
    let opcode = ints[i % ints.length];
    if (opcode.length !== 4) {
      opcode = '0'.repeat(4 - opcode.length).concat(opcode);
    }
    const instruction = parseInt(opcode.slice(-2), 10);
    const a = opcode.charAt(1) === '0' ? ints[parseInt(ints[i % ints.length + 1], 10)] : ints[i % ints.length + 1];
    const b = opcode.charAt(0) === '0' ? ints[parseInt(ints[i % ints.length + 2], 10)] : ints[i % ints.length + 2];
    switch (instruction) {
      case 99:
        run = false;
        break;
      case 1:
        ints[ints[i % ints.length + 3]] = parseInt(a, 10) + parseInt(b, 10);
        i += 4;
        break;
      case 2:
        ints[ints[i % ints.length + 3]] = parseInt(a, 10) * parseInt(b, 10);
        i += 4;
        break;
      case 3:
        ints[parseInt(ints[i % ints.length + 1], 10)] = input;
        i += 2;
        break;
      case 4:
        console.log(a);
        i += 2;
        break;
      default:
        throw Error(`unrecognized opcode: ${opcode} at index ${i}`);
    }
  }
  return ints[0];
}

function day5part2(stringInts, input) {
  const ints = stringInts.split(',');
  let run = true;
  let i = 0;
  while (run) {
    let opcode = ints[i % ints.length];
    if (opcode.length !== 4) {
      opcode = '0'.repeat(4 - opcode.length).concat(opcode);
    }
    const instruction = parseInt(opcode.slice(-2), 10);
    const a = parseInt(opcode.charAt(1) === '0' ? ints[parseInt(ints[i % ints.length + 1], 10)] : ints[i % ints.length + 1], 10);
    const b = parseInt(opcode.charAt(0) === '0' ? ints[parseInt(ints[i % ints.length + 2], 10)] : ints[i % ints.length + 2], 10);
    switch (instruction) {
      case 99:
        run = false;
        break;
      case 1:
        ints[ints[i % ints.length + 3]] = a + b;
        i += 4;
        break;
      case 2:
        ints[ints[i % ints.length + 3]] = a * b;
        i += 4;
        break;
      case 3:
        ints[parseInt(ints[i % ints.length + 1], 10)] = input;
        i += 2;
        break;
      case 4:
        console.log(a);
        i += 2;
        break;
      case 5:
        if (a !== 0) i = b;
        else i += 3;
        break;
      case 6:
        if (a === 0) i = b;
        else i += 3;
        break;
      case 7:
        if (a < b) ints[parseInt(ints[i % ints.length + 3], 10)] = 1;
        else ints[parseInt(ints[i % ints.length + 3], 10)] = 0;
        i += 4;
        break;
      case 8:
        if (a === b) ints[parseInt(ints[i % ints.length + 3], 10)] = 1;
        else ints[parseInt(ints[i % ints.length + 3], 10)] = 0;
        i += 4;
        break;
      default:
        throw Error(`unrecognized opcode: ${opcode} at index ${i}`);
    }
  }
  return ints[0];
}

module.exports.solution = solution;
