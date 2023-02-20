const Bank = require('../bank/bank.js');
const Deposit = require('../deposit/deposit.js');
const Withdrawal = require('../withdrawal/withdrawal.js');

describe('Integration', () => {
  it('adds a deposit', () => {
    const bank = new Bank();
    const deposit = new Deposit();
    bank.insert(deposit);
    expect(bank.statement).toEqual([deposit]);
  });
  it('adds 2 deposits', () => {
    const bank = new Bank();
    const deposit1 = new Deposit();
    const deposit2 = new Deposit();
    bank.insert(deposit1);
    bank.insert(deposit2);
    expect(bank.statement).toEqual([deposit1, deposit2]);
  });
  it('adds 2 deposits and returns a balance', () => {
    const bank = new Bank();
    const deposit1 = new Deposit('1/1/1', 1000);
    const deposit2 = new Deposit('2,2,2', 1000);
    bank.insert(deposit1);
    bank.insert(deposit2);
    expect(bank.balance).toEqual(2000);
  });
  it('adds a deposit and a withdrawal', () => {
    const bank = new Bank();
    const deposit = new Deposit('1/1/1', 1000);
    const withdrawal = new Withdrawal('2,2,2', 1000);

    bank.insert(deposit);
    bank.withdraw(withdrawal);

    expect(bank.balance).toEqual(0);
  });
  it('adds a deposit and 2 withdrawals', () => {
    const bank = new Bank();
    const deposit = new Deposit('1/1/1', 1000);
    const withdrawal1 = new Withdrawal('2,2,2', 1000);
    const withdrawal2 = new Withdrawal('2,2,2', 1000);

    bank.insert(deposit);
    bank.withdraw(withdrawal1);
    bank.withdraw(withdrawal2);

    expect(bank.balance).toEqual(-1000);
  });
  it('returns an empty statement when no deposits or withdrawals in correct form', () => {
    const bank = new Bank();
    expect(bank.getStatement()).toEqual('date || credit || debit || balance');
  });

  it('returns an accurate statement with 1 deposit in correct form', () => {
    const bank = new Bank();
    const deposit = new Deposit('1/1/1', 1000);
    bank.insert(deposit);
    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000 ||  || 1000'
    );
  });
});
