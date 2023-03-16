import { expect } from 'chai';
import { SecretCatcherService } from '../src/secret-catcher-service';

describe('SecretCatcherService', () => {
  it('should throw an error if we pass true', () => {
    const target = new SecretCatcherService(true);

    expect(() => target.doSomeLogic()).to.throw('Logic error!');
  });
});