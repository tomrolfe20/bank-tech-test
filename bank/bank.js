class Bank {
  constructor() {
    this.statement = [];
    this.balance = 0;
  }

  insert(deposit) {
    this.statement.push(deposit);
    this.balance += deposit.amount;
  }

  withdraw(withdrawal) {
    this.statement.push(withdrawal);
    this.balance -= withdrawal.amount;
  }

  getStatement() {
    let display = 'date || credit || debit || balance';
    this.statement.forEach((trans) => {
      display += '\n';
      display += trans.date;
      display += ' || ';
      trans.deposit ? (display += trans.amount) : ' ';
      display += ' || ';
      trans.withdrawal ? (display += trans.amount) : ' ';
      display += ' || ';
      display += this.balance;
    });
    return display;
  }
}

module.exports = Bank;
