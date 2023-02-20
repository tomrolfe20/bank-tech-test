const Deposit = require('./deposit.js');

describe('Deposit', () => {
  it('creates an empty object', () => {
    const deposit = new Deposit();
    expect(deposit).toEqual({
      amount: undefined,
      date: undefined,
      deposit: true,
    });
  });
  it('adds a deposit with a date', () => {
    const deposit = new Deposit('18/01/2020');
    expect(deposit.date).toEqual('18/01/2020');
  });
  it('adds a deposit with a date and an amount', () => {
    const deposit = new Deposit('18/01/2020', 1000);
    expect(deposit.date).toEqual('18/01/2020');
    expect(deposit.amount).toEqual(1000);
  });
});
