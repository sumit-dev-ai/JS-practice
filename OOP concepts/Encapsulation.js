console.log("----------------------------------------------------------------")
//What is Encapsulation?

// Encapsulation is one of the four main principles of OOP (Object-Oriented Programming), and 
// it means hiding internal details and exposing only what is necessary.
//  This helps to protect data from accidental changes and makes code easier to maintain.


console.log("----------------------------------------------------------------")
// 🧠 Definition

// Encapsulation is the concept of binding data (properties) and methods (functions) together inside a 
// class or object and restricting direct access to some of the object's components.

console.log("----------------------------------------------------------------")
// ✅ Why Use Encapsulation?

// Protects object integrity by preventing outside interference
// Makes code more readable and maintainable
// Allows internal implementation to change without affecting external code
// Helps enforce validation rules


console.log("----------------------------------------------------------------")
// 🧰 Encapsulation in JavaScript – How to Do It
// 1. Using Closures (Function Scope) – Traditional Method

function Person(name) {
  let _name = name; // private variable

  this.getName = function () {
    return _name;
  };

  this.setName = function (newName) {
    if (typeof newName === 'string') {
      _name = newName;
    }
  };
}

const p1 = new Person("John");
console.log(p1.getName()); // John
p1.setName("Jane");
console.log(p1.getName()); // Jane

// _name is not directly accessible outside. It’s hidden (encapsulated) inside the closure
// Here, _name is not truly private — it’s just a naming convention.
// You can access it directly with no error.
// Developers use _ to indicate "treat this as private", but it's not enforced.


// 2. Using class with Private Fields (#) – Modern Way (ES2022+)
js
Copy
Edit
class Person {
  #name; // private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    if (typeof name === 'string') {
      this.#name = name;
    }
  }
}

const p = new Person("Alice");
console.log(p.getName()); // Alice
p.setName("Bob");
console.log(p.getName()); // Bob

// console.log(p.#name); ❌ SyntaxError: Private field '#name' must be declared in an enclosing class
// #name is a true private field, not accessible outside the class.

// you cannot even check if new field exists
"#name" in u; // false
// | Rule                                         | Explanation                              |
// | -------------------------------------------- | ---------------------------------------- |
// | Start with `#`                               | Always prefix with `#`                   |
// | Only accessible inside the class             | Outside access gives `SyntaxError`       |
// | Not inherited by subclasses unless redefined | They don't behave like public properties |
// | Can't be dynamically accessed (`u["#name"]`) | ❌ Not allowed                            |
// | No access through `this["#name"]`            | ❌ Won't work                             |



// Real Word Use
class BankAccount {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.getBalance());  // ✅ 70

// console.log(acc.#balance);      // ❌ SyntaxError
