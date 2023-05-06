class BankAccount {
  readonly id: number; // means, id can access outside of this class but not modify.
  name: string;
  private _balance: number; // means it only accessable in BankAccount class

  //   protected means it only in BankAccount class and it's in child class those class extends this(BankAccount) class
  constructor(id: number, name: string, balance: number) {
    this._balance = balance;
    this.id = id;
    this.name = name;
  }
  getBalance() {
    console.log(`Current Balance is ${this._balance}`);
  }
  moneyDeposit(amount: number) {
    this._balance = this._balance + amount;
  }
  moneyWithdraw(amount: number) {
    this._balance = this._balance - amount;
  }
}
class StudentAccount extends BankAccount {
  resNo: number;
  constructor(id: number, name: string, balance: number, resNo: number) {
    super(id, name, balance);
    this.resNo = resNo;
  }
}
const diptaAccount = new BankAccount(1, "Dipta Saha", 33);
const keyaAccount = new StudentAccount(2, "Keya Saha", 50, 44444);
diptaAccount.getBalance();
keyaAccount.moneyDeposit(500);
console.log(keyaAccount);
