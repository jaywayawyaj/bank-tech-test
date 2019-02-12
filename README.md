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

# Appendix

# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

