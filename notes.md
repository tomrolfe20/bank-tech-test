# Requirements

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

# Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

# User story

As a user i want to add a deposit
As a user i want to print my bank statement
As a user i want to see what date i added the deposit
As a user i want to see how much credit i have
As a user i want to see how much debit i have
As a user i want to see what my balance is
As a user i want to withdraw money

# Tests

Return true

Add a deposit
Add 2 deposits
Check balance

Add deposit date
Add 2 deposits with 2 dates
Check balance contains the 2 dates

Add deposit
Withdraw money
Check balance

Add deposit
Check credit
Withdraw money
Check debit
Check balance
