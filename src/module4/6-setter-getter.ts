class BankAccount1 {
  readonly id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this._balance = balance;
    this.id = id;
    this.name = name;
  }
  //   By using getter and setter, i can read (for get) or modify property (for set) value using like, someOne.balance (for get) or someOne.deposit = 500 (for set)
  //   Getter
  get balance(): number {
    return this._balance; // means now balance is only accessable from anywhere by using .balance, but it can not be modified
  }
  //   Setter
  set deposit(amount: number) {
    this._balance = this._balance + amount; // means now balance can modify from anywhere by using .deposit
  }

  //   getBalance(): number {
  //     return this._balance;
  //   }
  //   moneyDeposit(amount: number) {
  //     this._balance = this._balance + amount;
  //   }
  moneyWithdraw(amount: number) {
    this._balance = this._balance - amount;
  }
}
class StudentAccount1 extends BankAccount1 {
  resNo: number;
  constructor(id: number, name: string, balance: number, resNo: number) {
    super(id, name, balance);
    this.resNo = resNo;
  }
}
const diptaAccount1 = new BankAccount1(1, "Dipta Saha", 33);
const keyaAccount1 = new StudentAccount1(2, "Keya Saha", 50, 44444);
// const balance = diptaAccount1.getBalance();
console.log(diptaAccount1.balance); //now i can access _balance property with the help of get method, but i can't not modify that
diptaAccount1.deposit = 500; //now i can set any number value to _balance property with the help of set method

console.log(diptaAccount1.balance);
