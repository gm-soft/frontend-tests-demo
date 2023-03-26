import { expect } from 'chai';
import { NotFoundError } from '../src/not-found-error';

describe('NotFoundError', () => {
  it('should return true for instanceof Error', () => {
    const err = new NotFoundError('Not found');
    expect(err instanceof Error).to.equal(true);
  });

  it('should return true for instanceof NotFoundError', () => {
    const err = new NotFoundError('Not found');
    expect(err instanceof NotFoundError).to.equal(true);
  });
});
