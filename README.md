# Makers Academy Tech Test Week - Bank Test

The first from a week of Tech Tests at Makers Academy. 
The bank program needs these features:
- Make a withdrawal
- Make a deposit
- Receive an account statement

#### User Stories

```
As a bank customer,
So that I can have somewhere to store my money,
I want to be able to open an account

As a bank customer,
So that I can put my money in the bank,
I want to be able to make deposits to my account

As a bank customer,
So that I can use my money,
I want to be able to make withdrawals from my account

As a bank customer,
So that I can find out my spending history,
I want to be able to print a bank statement
```

See full challenge in Appendix

## Technologies Used
 - JavaScript
 - Jasmine and Karma/Istanbul for testing
 - ESLint for linting

## Instructions

```
$ git clone git@github.comjaywayawyaj/bank-tech-test
$ cd bank-test
$ open index.html
```

This should open a browser, from which you should access the console and use these instructions (> denotes user input/instructions):

```
>let account = new Account()
> account
Account {txns: Array(0), balance: 0}
> account.deposit(100)
100
> account.withdraw(50)
50
> account
Account {txns: Array(2), balance: 50}
> account.printStatement()
"date || credit || debit || balance
12/02/2019 || || 50.00 || 50.00
12/02/2019 || 100.00 || || 100.00
"
```

## Running Tests

```
$ open SpecRunner.html
```

## Approach

My approach to this task was to approach it slowly and be thorough. I wanted to write the program in JavaScript and feel like I would be happy presenting it as if it were a real tech test for a potential employer. I feel like I can justify the decisions I've made throughout my code, which I feel supports this notion.

