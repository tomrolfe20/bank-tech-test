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

  addDecimals(int) {
    int.toString().includes('.') ? (int = int.toFixed(2)) : (int += '.00');
    return int;
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
        trans.deposit ? (display += this.addDecimals(trans.amount)) : '';
        display += ' || ';
        //If transaction is a withdrawal, add it to the string to be returned. If it contains a decimal then deal with that.
        trans.withdrawal ? (display += this.addDecimals(trans.amount)) : '';
        display += ' || ';
        //Add the transaction balance to the display. If it contains a decimal then deal with that.
        console.log('trans balance: ', trans.balance);
        display += this.addDecimals(trans.balance);
      });
    return display;
  }
}

module.exports = Bank;
