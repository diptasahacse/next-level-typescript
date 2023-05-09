"use strict";
class BankAccount {
    //   protected means it only in BankAccount class and it's in child class those class extends this(BankAccount) class
    constructor(id, name, balance) {
        this._balance = balance;
        this.id = id;
        this.name = name;
    }
    getBalance() {
        console.log(`Current Balance is ${this._balance}`);
    }
    moneyDeposit(amount) {
        this._balance = this._balance + amount;
    }
    moneyWithdraw(amount) {
        this._balance = this._balance - amount;
    }
}
class StudentAccount extends BankAccount {
    constructor(id, name, balance, resNo) {
        super(id, name, balance);
        this.resNo = resNo;
    }
}
const diptaAccount = new BankAccount(1, "Dipta Saha", 33);
const keyaAccount = new StudentAccount(2, "Keya Saha", 50, 44444);
diptaAccount.getBalance();
keyaAccount.moneyDeposit(500);
console.log(keyaAccount);
