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

  it('adds a deposit and a withdrawal', () => {
    const bank = new Bank();
    const deposit = new Deposit('1/1/1', 1000);
    const withdrawal = new Withdrawal('2,2,2', 1000);

    bank.insert(deposit);
    bank.withdraw(withdrawal);

    expect(bank.statement).toEqual([deposit, withdrawal]);
  });
  it('adds a deposit and 2 withdrawals', () => {
    const bank = new Bank();
    const deposit = new Deposit('1/1/1', 1000);
    const withdrawal1 = new Withdrawal('2,2,2', 1000);
    const withdrawal2 = new Withdrawal('2,2,2', 1000);

    bank.insert(deposit);
    bank.withdraw(withdrawal1);
    bank.withdraw(withdrawal2);

    expect(bank.statement).toEqual([deposit, withdrawal1, withdrawal2]);
  });
  it('returns an empty statement when no deposits or withdrawals in correct format', () => {
    const bank = new Bank();
    expect(bank.getStatement()).toEqual('date || credit || debit || balance');
  });

  it('returns an accurate statement with 1 deposit in correct format', () => {
    const bank = new Bank();
    const deposit = new Deposit('1/1/1', 1000);
    bank.insert(deposit);
    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.00 ||  || 1000.00'
    );
  });
  it('returns an accurate statement with 2 deposits in correct format', () => {
    const bank = new Bank();
    const deposit1 = new Deposit('1/1/1', 1000);
    const deposit2 = new Deposit('1/1/1', 1000);
    bank.insert(deposit1);
    bank.insert(deposit2);
    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.00 ||  || 1000.00\n1/1/1 || 1000.00 ||  || 2000.00'
    );
  });
  it('returns an accurate statement with 2 deposits in correct format', () => {
    const bank = new Bank();
    const deposit1 = new Deposit('1/1/1', 1000.5);
    const deposit2 = new Deposit('1/1/1', 1000.5);
    bank.insert(deposit1);
    bank.insert(deposit2);
    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.50 ||  || 1000.50\n1/1/1 || 1000.50 ||  || 2001.00'
    );
  });
});
