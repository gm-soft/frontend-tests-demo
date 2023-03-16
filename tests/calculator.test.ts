// test/calculator.test.ts
import { expect } from 'chai';
import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  it('should call methods', () => {
    const add = new Calculator(1).add(1);
    const substract = new Calculator(1).subtract(1);
    const multiply = new Calculator(1).multiply(1);
    expect(new Calculator(1).divide(1)).to.equal(1);

  });
});