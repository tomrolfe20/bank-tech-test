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
      trans.deposit ? (display += trans.amount + '.00') : ' ';
      display += ' || ';
      trans.withdrawal ? (display += trans.amount + '.00') : ' ';
      display += ' || ';
      trans.deposit ? (balance += trans.amount) : (balance -= trans.amount);
      display += balance + '.00';
    });
    return display;
  }
}

module.exports = Bank;
