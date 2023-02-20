const Bank = require('./bank.js');

describe('Bank withdrawal app', () => {
  it('returns true', () => {
    const bank = new Bank();
    expect(bank.statement).toBe(true);
  });
});
