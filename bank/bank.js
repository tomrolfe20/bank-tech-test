class Bank {
  constructor() {
    this.statement = [];
    this.balance = 0;
  }

  insert(deposit) {
    //creates a deposit balance to track the balance after each transaction
    deposit.balance = this.balance + deposit.amount;
    //updates the balance with the deposit amount
    this.balance += deposit.amount;
    //adds deposit to the array of transactions
    this.statement.push(deposit);
  }

  withdraw(withdrawal) {
    //creates a withdrawal balance to track the balance after each transaction
    withdrawal.balance = this.balance - withdrawal.amount;
    //updates the balance with the withdrawal amount
    this.balance -= withdrawal.amount;
    //adds deposit to the array of transactions
    this.statement.push(withdrawal);
  }

  addDecimals(int) {
    // if the number passed as the argument contains a . it will give that number to 2 decimal places, if not it will add .00 to the end.
    int.toString().includes('.') ? (int = int.toFixed(2)) : (int += '.00');
    return int;
  }

  getStatement() {
    let display = 'date || credit || debit || balance';
    let balance = 0;
    this.statement
      //slice and reverse makes it show the most recent transaction first
      .slice()
      .reverse()
      .forEach((trans) => {
        // \n adds a new line
        display += '\n';
        display += trans.date;
        display += ' || ';
        //If transaction is a deposit, add it to the string to be returned. Adds decimals if required.
        trans.deposit ? (display += this.addDecimals(trans.amount)) : '';
        display += ' || ';
        //If transaction is a withdrawal, add it to the string to be returned. Adds decimals if required.
        trans.withdrawal ? (display += this.addDecimals(trans.amount)) : '';
        display += ' || ';
        //Add the transaction balance to the display. Adds decimals if required.

        display += this.addDecimals(trans.balance);
      });
    return display;
  }
}

module.exports = Bank;
