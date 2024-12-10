## Classes

Classes are a blueprint for creating objects in JavaScript. They define the properties and methods that an object will have, and can be used to create multiple instances of that object.

There are three main ideas that make classes useful:

1. Encapsulating: Classes allow you to encapsulate behavior within objects, which bundles data and methods into a single unit. This makes it easier to reason about and debug your code.

2. Inheritance: By extending classes, you can create new classes that inherit the properties and methods of existing classes, which allows you to build on top of existing functionality and create more complex objects.

3. Abstraction: Classes can be used to abstract away complex implementation details, making it easier to use and interact with your code.

Classes will be used with older React code. While a lot of React components now are made as functions, there is plenty of legacy code that will still use classes.

```javascript
// Classes are always capitalized
class Animal {
  // Requires a constructor function which is called whenever the object is created.
  // You can have default values (for all functions)
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Create a new instance of the class with 'new' keyword
const animal = new Animal('Thing');
animal.speak(); // output: "Thing makes a noise."

// Classes that extend other classes... (also known as class inheritence)
class Dog extends Animal {
  constructor(name) {
    super(name); // super() inherits the properties/methods of the 'Animal' class
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Create a new instance of the class with 'new' keyword
const dog = new Dog('Spot');
dog.speak(); // output: "Spot barks."

class Rectangle {
  constructor(height = 1, width = 1) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    console.log(`The area is ${this.height * this.width}`);
  }
}

let myRectangle = new Rectangle();
let myOtherRectangle = new Rectangle(10, 5);

console.log(myOtherRectangle.width); // 5
console.log(myOtherRectangle.height); // 10
myOtherRectangle.getArea(); // 50

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  getArea() {
    super.getArea();
  }
}

let mySquare = new Square(5); // 25
```

Here's a realistic example of when you would want to use a class: let's say you have a user management system. You need a place to store their username, password, and email, as well as functions for updating their email, checking their password, and maybe displaying their info. Encapsulating it all inside of a class cleans the code up a lot. Here is what the code might look like:

```js
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // Method to update email
    updateEmail(newEmail) {
        this.email = newEmail;
    }

    // Method to check password
    checkPassword(inputPassword) {
        return this.password === inputPassword;
    }

    // Method to display user information
    getUserInfo() {
        return `Username: ${this.username}, Email: ${this.email}`;
    }
}
```

Then, anytime you need to register users or get their information, you could do something like this:

```js
const user1 = new User('john_doe', 'john@example.com', 'password123');
const user2 = new User('jane_doe', 'jane@example.com', 'password456');

// Updating email
user1.updateEmail('john.new@example.com');

// Authentication
console.log(user1.checkPassword('password123')); // Output - true
console.log(user2.checkPassword('wrongpassword')); // Output - false

// Display user information
console.log(user1.getUserInfo()); // Output - Username: john_doe, Email: john.new@example.com
console.log(user2.getUserInfo()); // Output - Username: jane_doe, Email: jane@example.com
```

It makes using code a lot easier when all of the functions and information are stored in one place.