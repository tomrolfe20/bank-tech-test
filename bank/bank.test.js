const Bank = require('./bank.js');

describe('Bank withdrawal app', () => {
  let bank;
  let mockDeposit1000;
  let mockDeposit2000;
  let mockWithdrawal1000;

  beforeEach(() => {
    bank = new Bank();
    mockDeposit1000 = { date: '1/1/1', deposit: true, amount: 1000 };
    mockDeposit2000 = { date: '1/1/1', deposit: true, amount: 2000 };
    mockWithdrawal1000 = { date: '1/1/1', amount: 1000 };
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
  it('adds a deposit and a withdrawal', () => {
    bank.insert(mockDeposit1000);
    bank.withdraw(mockWithdrawal1000);

    expect(bank.statement).toEqual([mockDeposit1000, mockWithdrawal1000]);
  });
  it('returns an accurate statement with 1 deposit in correct format', () => {
    bank.insert(mockDeposit1000);

    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.00 ||  || 1000.00'
    );
  });
});
