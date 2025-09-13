// 1-- Create a constructor function Rectangle that takes width and height as parameters. 

//      Add an instance method getArea to the prototype that calculates the area of the rectangle.

//      Also, add a static method isSquare to the constructor that checks if a rectangle is a square.
function Rectangle(width,height){
    this.width=width;
    this.height=height;
}
Rectangle.prototype.getArea=function(){
    return this.width*this.height;
}
Rectangle.isSquare=function(rectangle){
    return rectangle.width===rectangle.height;
}
const rect1=new Rectangle(4,5);
console.log(rect1.getArea());
console.log(Rectangle.isSquare(rect1));
// 2-- Create a constructor function BankAccount that takes accountNumber and balance as parameters.
//      Add an Instance Method ‘deposit‘ that takes an amount and adds it to the balance.
//      Add a Static method ‘transferFunds ‘ to transfer funds from one account to another
//      Use getters and setters for the properties.
// Constructor Function
function BankAccount(accountNumber, balance) {
  this._accountNumber = accountNumber; // الخصائص private style
  this._balance = balance;
}

// Getters
Object.defineProperty(BankAccount.prototype, "accountNumber", {
  get: function () {
    return this._accountNumber;
  }
});

Object.defineProperty(BankAccount.prototype, "balance", {
  get: function () {
    return this._balance;
  }
});

// Setters
Object.defineProperty(BankAccount.prototype, "balance", {
  set: function (value) {
    if (value < 0) {
      console.log(" Balance cannot be negative!");
    } else {
      this._balance = value;
    }
  }
});

// Instance Method: deposit
BankAccount.prototype.deposit = function (amount) {
  if (amount > 0) {
    this._balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this._balance}`);
  } else {
    console.log(" Deposit amount must be positive");
  }
};

// Static Method: transferFunds
BankAccount.transferFunds = function (fromAccount, toAccount, amount) {
  if (amount > 0 && fromAccount.balance >= amount) {
    fromAccount.balance = fromAccount.balance - amount;
    toAccount.balance = toAccount.balance + amount;
    console.log(` Transferred ${amount} from ${fromAccount.accountNumber} to ${toAccount.accountNumber}`);
  } else {
    console.log(" Transfer failed: insufficient funds or invalid amount");
  }
};
const acc1 = new BankAccount(101, 500);
const acc2 = new BankAccount(102, 200);

console.log("Account 1 balance:", acc1.balance); // 500
console.log("Account 2 balance:", acc2.balance); // 200

acc1.deposit(100); // يزود 100 على acc1

BankAccount.transferFunds(acc1, acc2, 300); // يحول من acc1 → acc2

console.log("Account 1 balance:", acc1.balance); // 300
console.log("Account 2 balance:", acc2.balance); // 500



