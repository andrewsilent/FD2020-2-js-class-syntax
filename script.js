/**
 * Create a range of numbers.
 * @param {number} from - The range.from value, default = 0..-1000
 * @param {number} to - The range.to value, default = 0..1000
 */
class RangeValidator {
  constructor(from = Math.ceil(Math.random() * -(1000 + 1)), to = Math.ceil(Math.random() * (1000 + 1))) {
    if (!(Number.isInteger(+from)) || !(Number.isInteger(+to))) {
      throw new TypeError('Wrong type of value, {number} expected');
    }
    this._from = +from;
    this._to = +to;
  }
  set from(v) {
    if (Number.isInteger(+v)) {
      this._from = +v;
      return;
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
    throw new TypeError('Wrong type of value, {number} expected');
  }
  get to() {
    return this._to;
  }
  get range() {
    return Array(this._from, this._to);
  }
  validate(n) {
    return ((n - this._from) * (n - this._to) <= 0);
  }
}

const r1 = new RangeValidator(20, 25);
const r2 = new RangeValidator('20', 15);
const r3 = new RangeValidator(-20, 25);
const r4 = new RangeValidator(-20, '-25');