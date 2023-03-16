// test/email.test.ts
import { expect } from 'chai';
import { Email } from '../src/email';

describe('Email', () => {
  it('should return email for valid cases', () => {
    const validEmails = [
      'test@example.com',
      'jane.doe@example.co.uk',
      'john_doe@example.io',
    ];

    validEmails.forEach(email => {
      expect(new Email(email).get()).to.equal(email);
    });
  });

  it('should throw error for null or empty string', () => {
    const invalidEmails = [ null, '' ];

    invalidEmails.forEach(email => {
      expect(() => new Email(email)).to.throw('Email cannot be null');
    });
  });

  it('should throw error for invalid emails', () => {
    const invalidEmails = [
      'test@example',
      'test@.com',
      'test@.com.',
      'test@.com.',
      '@example.com'
    ];

    invalidEmails.forEach(email => {
      expect(() => new Email(email).get()).to.throw('Invalid email');
    });
  });
});
