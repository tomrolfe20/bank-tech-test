const Bank = require('./bank.js');

describe('Bank withdrawal app', () => {
  it('returns an empty array of deposits', () => {
    const bank = new Bank();
    expect(bank.statement).toEqual([]);
  });
});
