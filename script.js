/**
 * Create a range of numbers.
 * @param {number} from - The range.from value, default = 0
 * @param {number} to - The range.to value, default = 10
 */
class RangeValidator {
  constructor(from = 0, to = 10) {
    if (!(Number.isInteger(from)) || !(Number.isInteger(to))) {
      throw new TypeError('Wrong type of value, {number} expected');
    }
    if (to < from) {
      throw new RangeError('Value "To" must be greater than value "From"');
    }
    this._from = from;
    this._to = to;
  }

  set from(v) {
    if (v > this._to) {
      throw new RangeError('Value "From" must be less than value "To"');
    }
    if (!Number.isInteger(v)) {
      throw new TypeError('Wrong type of value, {number} expected');
    }
    this._from = v;
    return;
  }

  get from() {
    return this._from;
  }

  set to(v) {
    if (v < this._from) {
      throw new RangeError('Value "To" must be greater than value "From"');
    }
    if (!Number.isInteger(v)) {
      throw new TypeError('Wrong type of value, {number} expected');
    }
    this._to = v;
    return;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(v) {
    if (!Number.isInteger(n)) {
      throw new TypeError('Wrong type of value, {number} expected');
    }
    if ((n - this._from) * (n - this._to) > 0) {
      throw new RangeError(`${n} is out of range ${this._from}..${this._to}`);
    }
    return n;
  }
}

const r1 = new RangeValidator(20, 25);
const r3 = new RangeValidator(-20, 25);
const r5 = new RangeValidator('-20', 25);