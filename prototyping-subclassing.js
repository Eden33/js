function BankAccount(accountNumber, balance) {
  this.accountNumber = accountNumber;
  this.balance = balance;
};
BankAccount.prototype.describe = function() {
  return "Account Number is: " + this.accountNumber + "; balance: " + this.balance;
};

function BankGiroAccount(accountNumber, balance, overdraft) {
  BankAccount.call(this, accountNumber, balance);
  this.overdraft = overdraft;
};
BankGiroAccount.prototype = Object.create(BankAccount.prototype);
BankGiroAccount.prototype.constructor = BankAccount;
BankGiroAccount.prototype.describe = function() {
  return BankAccount.prototype.describe.call(this) + "; overdraft: "+ this.overdraft;
};

var bankAccount = new BankAccount(123, 1000.00);
var giroAcocunt = new BankGiroAccount(1234, 3000.00, 500.00);
console.log(bankAccount.describe());
console.log(giroAcocunt.describe());
