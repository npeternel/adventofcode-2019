'use strict';

class Computer {

  constructor(stringInts, input) {
    this.ints = stringInts.split(',');
    this.halted = false;
    this.i = 0;
    this.initialInput = input;
    this.invalid = false;
    this.relativeBase = 0;
  }

  execute(options) {
    let output;
    const pause = !! (options && options.pause);
    let steps = 0;
    while (!this.halted && !this.invalid) {
      let opcode = this.ints[this.i % this.ints.length];
      if (options && steps === options.stop) throw Error(`stopping at ${opcode}`);
      steps += 1;
      if (opcode.length !== 5) {
        opcode = '0'.repeat(5 - opcode.length).concat(opcode);
      }
      const instruction = parseInt(opcode.slice(-2), 10);
      const a = this.retrieve(opcode.charAt(2), 1);
      const b = this.retrieve(opcode.charAt(1), 2);
      if (this.invalid) return;
      switch (instruction) {
        case 99:
          this.halted = true;
          if (output === undefined) this.invalid = true;
          break;
        case 1:
          this.place(opcode.charAt(0), a + b, 3);
          this.i += 4;
          break;
        case 2:
          this.place(opcode.charAt(0), a * b, 3);
          this.i += 4;
          break;
        case 3:
          let currInput;
          if (this.initialInput !== undefined) {
            currInput = this.initialInput;
            this.initialInput = undefined;
          } else {
            currInput = options.input;
          }
          this.place(opcode.charAt(2), currInput, 1);
          this.i += 2;
          break;
        case 4:
          output = parseInt(a, 10);
          this.i += 2;
          if (pause) return output;
          else if (options && options.print) console.log(`output: ${a}`);
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
          if (a < b) this.place(opcode.charAt(0), 1, 3);
          else this.place(opcode.charAt(0), 0, 3);
          this.i += 4;
          break;
        case 8:
          if (a === b) this.place(opcode.charAt(0), 1, 3);
          else this.place(opcode.charAt(0), 0, 3);
          this.i += 4;
          break;
        case 9:
          this.relativeBase += a;
          this.i += 2;
          break;
        default:
          this.invalid = true;
          this.halted = true;
      }
    }
    return parseInt(output, 10);
  }

  retrieve(opVal, shift) {
    switch (opVal) {
      case '0':
        return parseInt(this.ints[parseInt(this.ints[this.i % this.ints.length + shift], 10)], 10) || 0;
      case '1':
        return parseInt(this.ints[this.i % this.ints.length + shift], 10) || 0;
      case '2':
        return parseInt(this.ints[parseInt(this.ints[this.i % this.ints.length + shift], 10) + this.relativeBase], 10) || 0;
      default:
        this.invalid = true;
        return;
    }
  }

  place(opVal, value, shift) {
    let index;
    switch (opVal) {
      case '0':
        index = parseInt(this.ints[this.i % this.ints.length + shift], 10);
        break;
      case '1':
        index = this.i % this.ints.length + shift;
        break;
      case '2':
        index = parseInt(this.ints[this.i % this.ints.length + shift], 10) + this.relativeBase;
        break;
      default:
        this.invalid = true;
        return;
    }
    if (index >= this.ints.length) this.ints = this.ints.concat(new Array(index - this.ints.length + 1).fill('0'));
    this.ints[index] = value;
  }
}

module.exports.Computer = Computer;
