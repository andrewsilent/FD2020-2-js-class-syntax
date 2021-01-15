/**
 * Create a range of numbers.
 * @param {number} from - The range.from value, default = 0..-1000
 * @param {number} to - The range.to value, default = 0..1000
 */
function createRandomValue(n = 100) {
  return Math.ceil(Math.random() * (n));
}
class RangeValidator {
  constructor(from = createRandomValue(0), to = createRandomValue(10)) {
    if (!(Number.isInteger(+from)) || !(Number.isInteger(+to))) {
      throw new TypeError('Wrong type of value, {number} expected');
    }
    if (+to < +from) {
      throw new RangeError('Value "To" must be greater than value "From"');
    }
    this._from = +from;
    this._to = +to;
  }

  set from(v) {
    if (Number.isInteger(+v)) {
      this._from = +v;
      return;
    }
    if (+v > this._to) {
      throw new RangeError('Value "From" must be less than value "To"');
    }
    throw new TypeError('Wrong type of value, {number} expected');
  }

  get from() {
    return this._from;
  }

  set to(v) {
    if (Number.isInteger(+v)) {
      this._to = +v;
      return;
    }
    if (+v < this._from) {
      throw new RangeError('Value "To" must be greater than value "From"');
    }
    throw new TypeError('Wrong type of value, {number} expected');
  }

  get to() {
    return this._to;
  }

  get range() {
    return Array(this._from, this._to);
  }

  validate(n) {
    if ((n - this._from) * (n - this._to) <= 0) {
      return n;
    }
    throw new RangeError(`${n} is out of range ${this._from}..${this._to}`);
  }
}

const r1 = new RangeValidator(20, 25);
const r3 = new RangeValidator(-20, 25);
const r5 = new RangeValidator('-20', 25);