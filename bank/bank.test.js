const Bank = require('./bank.js');

describe('Bank withdrawal app', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
    mockDeposit1000 = { date: '1/1/1', amount: 1000 };
    mockDeposit2000 = { date: '1/1/1', amount: 2000 };
  });
  it('returns an empty array of deposits', () => {
    expect(bank.statement).toEqual([]);
  });
  it('adds a deposit', () => {
    bank.insert(mockDeposit1000);
    expect(bank.statement).toEqual([mockDeposit1000]);
  });
  it('adds 2 deposits', () => {
    bank.insert(mockDeposit1000);
    bank.insert(mockDeposit2000);
    expect(bank.statement).toEqual([mockDeposit1000, mockDeposit2000]);
  });
});
