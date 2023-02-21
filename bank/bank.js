class Bank {
  constructor() {
    this.statement = [];
    this.balance = 0;
  }

  insert(deposit) {
    deposit.balance = this.balance + deposit.amount;
    this.balance += deposit.amount;
    this.statement.push(deposit);
  }

  withdraw(withdrawal) {
    withdrawal.balance = this.balance - withdrawal.amount;
    this.balance -= withdrawal.amount;
    this.statement.push(withdrawal);
  }

  getStatement() {
    let display = 'date || credit || debit || balance';
    let balance = 0;
    this.statement
      .slice()
      .reverse()
      .forEach((trans) => {
        display += '\n';
        display += trans.date;
        display += ' || ';
        //If transaction is a deposit, add it to the string to be returned. If it contains a decimal then deal with that.
        trans.deposit
          ? (display += trans.amount.toString().includes('.')
              ? trans.amount.toFixed(2)
              : trans.amount + '.00')
          : '';
        display += ' || ';
        //If transaction is a withdrawal, add it to the string to be returned. If it contains a decimal then deal with that.
        trans.withdrawal
          ? (display += trans.amount.toString().includes('.')
              ? trans.amount.toFixed(2)
              : trans.amount + '.00')
          : '';
        display += ' || ';
        //Add the transaction balance to the display. If it contains a decimal then deal with that.
        display += trans.balance.toString().includes('.')
          ? trans.balance.toFixed(2)
          : trans.balance + '.00';
      });
    return display;
  }
}

module.exports = Bank;
