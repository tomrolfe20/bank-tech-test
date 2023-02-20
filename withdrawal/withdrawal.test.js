const Withdrawal = require('./withdrawal.js');

describe('Withdrawal', () => {
  it('creates an empty object', () => {
    const withdrawal = new Withdrawal();
    expect(withdrawal).toEqual({
      amount: undefined,
      date: undefined,
      withdrawal: true,
    });
  });
  it('adds a withdrawal with a date', () => {
    const withdrawal = new Withdrawal('18/01/2020');
    expect(withdrawal.date).toEqual('18/01/2020');
  });
  it('adds a withdrawal with a date and an amount', () => {
    const withdrawal = new Withdrawal('18/01/2020', 1000);
    expect(withdrawal.date).toEqual('18/01/2020');
    expect(withdrawal.amount).toEqual(1000);
  });
});
