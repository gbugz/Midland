# More Advanced JS

ECMAScript is a set of rules and standards that define how JavaScript should work. With the additions to JavaScript in ECMAScript6, you have a lot more tools at your disposal. We will be utilizing them whenever possible moving forward so it is a good idea to get used to them now.

## ES6 / Advanced Topics

- let vs const vs var. Let is for variables that might change, const is for variables that cannot change. Var declarations are similar to let, but not very common anymore, so stick to using let and const.
- Variable hoisting - All declarations are moved to the top of the current scope. This can (but won't always) cause problems. Only declarations, NOT initialization will be hoisted.

```javascript
console.log(x); // output: undefined, but still runs without errors
const x = 5;
```

### Arrow functions

This allows you to create an anonymous function on the fly easier. Take the following examples:

```javascript
    function(e) {
        console.log(e.target);
    }
    //Is identical to
    e => { console.log(e.target); }

    //With only one parameter where the function returns on the only line
    function (a) {
        return a * 5;
    }

    a => a * 5

```

### Default Parameters

If you have a function that may or may not be given an argument, you can specify a default parameter when declaring the function.

```js
function myFunction(a, b = 0) {
    // Code
}

myFunction(4, 6); // a will be 4, b will be 6
myFunction(4); // a will be 4, b will be 0
myFunction(); // a will be undefined, b will be 0
```

### Spread syntax 

Spread syntax is a way to unpack elements from an array or object and use them in a different context. It creates a shallow copy of the array, basically.

```javascript
let parts = ["shoulders", "knees"];
let lyrics = ["head", ...parts, "and", "toes"]; // output: "head", "shoulders", "knees", "and", "toes"

let arr = [1, 2, 3];
let arr2 = [...arr]; // like arr.slice(); output: 1, 2, 3

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // output: 0, 1, 2, 3, 4, 5

// With Objects as well:
let me = { first: "Justin", last: "Luce" };
me = { ...me, middle: "Parker" }; // me = { first: "Justin", last: "Luce", middle: "Parker" };

me = { ...me, last: "Smith" }; // me = { first: "Justin", last: "Smith", middle: "Parker" };

const myFunction = (v, w, x, y, z) => {};
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]); // this would pass in: -1, 0, 1, 2, 3
```
