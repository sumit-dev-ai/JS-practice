//01-Create a Person class with name and age. Add a method introduce() that prints:
// 👉 "Hi, I’m Alice and I’m 25 years old."

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const p = new Person("Alice", 25);
p.introduce(); // Hi, I'm Alice and I'm 25 years old.


console.log("-------------Encapsulation-------------------------")
// 2.Encapsulation

// Create a BankAccount class with:

// A private field #balance
// A method deposit(amount)
// A method withdraw(amount)
// A method getBalance()
// ✅ Add validation so balance can't go negative.

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
    } else {
      console.log("Insufficient funds or invalid amount");
    }
  }

  get getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();

account.deposit(100);
console.log(account.getBalance); // 100

account.withdraw(30);
console.log(account.getBalance); // 70

account.withdraw(100); // Insufficient funds


// //Abstraction
// Create a CoffeeMachine class:

// Expose only makeCoffee()

// Internally use private methods like #grindBeans(), #boilWater(), etc.
console.log("------------------------Abstraction-------------------------")
class CoffeeMachine {
    #grindBeans() {
        console.log("Beans are being ground...");
    }
    
    #boilWater() {
        console.log("The water is boiling...");
    }
    
    makeCoffee() {
        this.#grindBeans();     //user cant see this as well
        this.#boilWater();      //user cant see this 
        console.log("☕ Here is your coffee!");
    }
}

const co = new CoffeeMachine();
co.makeCoffee();

console.log("-----------------------Inheritence-------------------------");
// 4. Inheritance
// Create a Vehicle class with a method start().
// Then create Car and Bike classes that inherit from Vehicle.
// Add a specific method to each subclass like drive() and pedal().

// Base class
class Vehicle {
  start() {
    console.log("Vehicle is starting...");
  }
}

// Car subclass
class Car extends Vehicle {
  drive() {
    console.log("Car is driving...");
  }
}

// Bike subclass
class Bike extends Vehicle {
  pedal() {
    console.log("Bike is pedaling...");
  }
}

// Create objects
const myCar = new Car();
const myBike = new Bike();

// Inherited method
myCar.start();   // Output: Vehicle is starting...
myCar.drive();   // Output: Car is driving...

myBike.start();  // Output: Vehicle is starting...
myBike.pedal();  // Output: Bike is pedaling...

console.log("-----------------Polymorphism----------------------");
// 5. Polymorphism
// Create a function makeSound(animal) that calls speak() on any object.
// Then create classes Dog, Cat, and Cow that each implement speak() differently.
// Call makeSound() with each of them.

// Polymorphic function
function makeSound(animal) {
    animal.speak();
}

// Dog class
class Dog {
    speak() {
        console.log("Dog says: Woof!");
    }
}

// Cat class
class Cat {
    speak() {
        console.log("Cat says: Meow!");
  }
}

// Cow class
class Cow {
    speak() {
        console.log("Cow says: Moo!");
    }
}

// Create instances
const dog = new Dog();
const cat = new Cat();
const cow = new Cow();

// Call the polymorphic function
makeSound(dog); //  Dog says: Woof!
makeSound(cat); //  Cat says: Meow!
makeSound(cow); //  Cow says: Moo!

 console.log("-----------------Getter And Setter----------------------");
 //Create a User class with private field #password.
// Add:
// setPassword(p) → Only allow strong passwords (min 6 chars)
// getPassword() → Return masked value (e.g., ******)

 class User {
  #password;

  setPassword(p) {
    if (typeof p === "string" && p.length >= 6) {
      this.#password = p;
      console.log("Password set successfully");
    } else {
      console.log("Password must be at least 6 characters long");
    }
  }

  getPassword() {
    if (this.#password) {
      return "*".repeat(this.#password.length); // Masked version
    } else {
      return "No password set please enter again";
    }
  }
}
const user = new User();

user.setPassword("abc");       //Password must be at least 6 characters long
console.log(user.getPassword()); // No password set please enter again

user.setPassword("secure123"); // Password set successfully
console.log(user.getPassword()); // *********


 console.log("-----------------Abstract Simulation----------------------");
// 7. Abstract Simulation
// Create a class Shape with method getArea() that throws an error: "You must override getArea()"
// Then create Rectangle and Circle classes that override getArea() and return the area.
class Shape{
    getArea(){
        throw new error("you must Override getArea()");
    }
}
class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;


    }
    getArea(){
        return (this.height*this.width);
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;

    }
    getArea(){
       return Math.PI * this.radius * this.radius;
    }
}
const rect = new Rectangle(10, 5);
console.log("Rectangle Area:", rect.getArea()); // 50

const circle = new Circle(5);
console.log("Circle Area:", circle.getArea().toFixed(2)); // 78.54

const shape = new Shape();
// shape.getArea(); //  Error: You must override getArea()
