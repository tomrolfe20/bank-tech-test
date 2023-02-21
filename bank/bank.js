class Bank {
  constructor() {
    this.statement = [];
  }

  insert(deposit) {
    this.statement.push(deposit);
  }

  withdraw(withdrawal) {
    this.statement.push(withdrawal);
  }

  getStatement() {
    let display = 'date || credit || debit || balance';
    let balance = 0;
    this.statement.forEach((trans) => {
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
      trans.withdrawal
        ? (display += trans.amount.toString().includes('.')
            ? trans.amount.toFixed(2)
            : trans.amount + '.00')
        : '';
      display += ' || ';
      //Add deposit or withdrawal amount to the balance
      trans.deposit ? (balance += trans.amount) : (balance -= trans.amount);
      display += balance.toString().includes('.')
        ? balance.toFixed(2)
        : balance + '.00';
    });
    return display;
  }
}

module.exports = Bank;
