const Bank = require('../bank/bank.js');
const Deposit = require('../deposit/deposit.js');
const Withdrawal = require('../withdrawal/withdrawal.js');

describe('Integration', () => {
  let bank;
  let deposit1000;
  let deposit1000copy;
  let deposit1000point5;
  let deposit1000point5copy;
  let deposit2000;
  let withdrawal1000;
  let withdrawal1000copy;

  beforeEach(() => {
    bank = new Bank();
    deposit1000 = new Deposit('1/1/1', 1000);
    deposit1000copy = new Deposit('1/1/1', 1000);
    deposit2000 = new Deposit('1/1/1', 2000);
    deposit1000point5 = new Deposit('1/1/1', 1000.5);
    deposit1000point5copy = new Deposit('1/1/1', 1000.5);
    withdrawal1000 = new Withdrawal('1/1/1', 1000);
    withdrawal1000copy = new Withdrawal('1/1/1', 1000);
  });

  it('adds a deposit', () => {
    bank.insert(deposit1000);
    expect(bank.statement).toEqual([deposit1000]);
  });
  it('adds 2 deposits', () => {
    bank.insert(deposit1000);
    bank.insert(deposit2000);
    expect(bank.statement).toEqual([deposit1000, deposit2000]);
  });

  it('adds a deposit and a withdrawal', () => {
    bank.insert(deposit1000);
    bank.withdraw(withdrawal1000);

    expect(bank.statement).toEqual([deposit1000, withdrawal1000]);
  });
  it('adds a deposit and 2 withdrawals', () => {
    bank.insert(deposit2000);
    bank.withdraw(withdrawal1000);
    bank.withdraw(withdrawal1000copy);

    expect(bank.statement).toEqual([
      deposit2000,
      withdrawal1000,
      withdrawal1000copy,
    ]);
  });
  it('returns an empty statement when no deposits or withdrawals in correct format', () => {
    expect(bank.getStatement()).toEqual('date || credit || debit || balance');
  });

  it('returns an accurate statement with 1 deposit in correct format', () => {
    bank.insert(deposit1000);

    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.00 ||  || 1000.00'
    );
  });
  it('returns an accurate statement with 2 deposits in correct format', () => {
    bank.insert(deposit1000);
    bank.insert(deposit1000copy);

    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.00 ||  || 2000.00\n1/1/1 || 1000.00 ||  || 1000.00'
    );
  });
  it('returns an accurate statement with 2 deposits in correct format', () => {
    bank.insert(deposit1000point5);
    bank.insert(deposit1000point5copy);
    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 || 1000.50 ||  || 2001.00\n1/1/1 || 1000.50 ||  || 1000.50'
    );
  });
  it('returns an accurate statement with 1 deposit and 1 withdrawal in correct format', () => {
    bank.insert(deposit2000);
    bank.withdraw(withdrawal1000);

    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 ||  || 1000.00 || 1000.00\n1/1/1 || 2000.00 ||  || 2000.00'
    );
  });
  it('returns statement in the correct order', () => {
    bank.insert(deposit2000);
    bank.withdraw(withdrawal1000);

    expect(bank.getStatement()).toEqual(
      'date || credit || debit || balance\n1/1/1 ||  || 1000.00 || 1000.00\n1/1/1 || 2000.00 ||  || 2000.00'
    );
  });
});
