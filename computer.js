'use strict';

class Computer {

  constructor(stringInts, input) {
    this.ints = stringInts.split(',');
    this.halted = false;
    this.i = 0;
    this.initialInput = input;
    this.invalid = false;
  }

  execute(input, pause) {
    let run = true;
    let output;
    while (run) {
      let opcode = this.ints[this.i % this.ints.length];
      if (opcode.length !== 4) {
        opcode = '0'.repeat(4 - opcode.length).concat(opcode);
      }
      const instruction = parseInt(opcode.slice(-2), 10);
      const a = parseInt(opcode.charAt(1) === '0' ? this.ints[parseInt(this.ints[this.i % this.ints.length + 1], 10)] : this.ints[this.i % this.ints.length + 1], 10);
      const b = parseInt(opcode.charAt(0) === '0' ? this.ints[parseInt(this.ints[this.i % this.ints.length + 2], 10)] : this.ints[this.i % this.ints.length + 2], 10);
      switch (instruction) {
        case 99:
          run = false;
          this.halted = true;
          if (output === undefined) this.invalid = true;
          break;
        case 1:
          this.ints[this.ints[this.i % this.ints.length + 3]] = a + b;
          this.i += 4;
          break;
        case 2:
          this.ints[this.ints[this.i % this.ints.length + 3]] = a * b;
          this.i += 4;
          break;
        case 3:
          let currInput;
          if (this.initialInput !== undefined) {
            currInput = this.initialInput;
            this.initialInput = undefined;
          } else {
            currInput = input;
          }
          this.ints[parseInt(this.ints[this.i % this.ints.length + 1], 10)] = currInput;
          this.i += 2;
          break;
        case 4:
          output = parseInt(a, 10);
          this.i += 2;
          if (pause) return output;
          break;
        case 5:
          if (a !== 0) this.i = b;
          else this.i += 3;
          break;
        case 6:
          if (a === 0) this.i = b;
          else this.i += 3;
          break;
        case 7:
          if (a < b) this.ints[parseInt(this.ints[this.i % this.ints.length + 3], 10)] = 1;
          else this.ints[parseInt(this.ints[this.i % this.ints.length + 3], 10)] = 0;
          this.i += 4;
          break;
        case 8:
          if (a === b) this.ints[parseInt(this.ints[this.i % this.ints.length + 3], 10)] = 1;
          else this.ints[parseInt(this.ints[this.i % this.ints.length + 3], 10)] = 0;
          this.i += 4;
          break;
        default:
          this.invalid = true;
          this.halted = true;
          run = false;
          break;
      }
    }
    return parseInt(output, 10);
  }
}

module.exports.Computer = Computer;
