const Bank = require('./bank/bank.js');
const Deposit = require('./deposit/deposit.js');
const Withdrawal = require('./withdrawal/withdrawal.js');

let bank = new Bank();
let deposit1000 = new Deposit('1/1/1', 1000);

bank.insert(deposit1000);
console.log(bank.getStatement());

//Run "node runBankExample.js" to view the output
