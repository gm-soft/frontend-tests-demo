import { expect } from 'chai';
import { User } from '../src/user';

describe('User', () => {
  it('should throw an error if we try to verify verified user', () => {
    const target = new User('john.doe@gmail.com', true);

    expect(() => target.verify()).to.throw();
    expect(target.isSocialEmail()).to.be.true;
  });

  it('.isVerified should return false if user was removed', () => {
    const target = new User('john.doe@gmail.com', false);

    target.delete();
    expect(target.isVerified()).to.be.false;
  });
});