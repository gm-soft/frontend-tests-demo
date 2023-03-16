import { expect } from 'chai';
import { Division } from '../src/division';

describe('Division', () => {
  it('should divide positive numbers. Returns positive result', () => {
    const target = new Division(5, 2);
    expect(target.result()).to.equal(2.5);
  });

  it('should divide one positive and one negative numbers. Returns negative result', () => {
    const target = new Division(5, -2);
    expect(target.result()).to.equal(-2.5);
  });

  it('should divide two negative numbers. Returns positive result', () => {
    const target = new Division(-5, -2);
    expect(target.result()).to.equal(2.5);
  });

  it('should return cirtuclation fraction', () => {
    const target = new Division(1, 3);
    expect(target.result()).to.equal(0.3333333333333333);
  });

  it('should catch error if we divide by zero', () => {
    const target = new Division(1, 0);
    expect(() => target.result()).to.throw();
  });
});