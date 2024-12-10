//const array1 = [1, 2, 4];
//const array2 = [6, 2, 8];
//const newArray = [... array1, ... array2,];
//console.log([...array1, ...array2]);
//console.log(newArray);

//!Makes a shallow copy of the array
//const arrayCopy = [...array1, ...array2];

//const sortFunction = (a, b) => a - b;
//const sortedArray = arrayCopy.sort(sortFunction);
//console.log("arrayCopy",  arrayCopy, "sortedArray" ,sortedArray);

//*CLASSES WORK

class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound () {
        console.log(`${this.name} makes a noise!`)
    }
}

class Dog extends Animal {
    constructor(name, isTrained){
        super(name);
        this.isTrained = isTrained ? true : false;
    }
    makeSound(){
        console.log(`${this.name}, the ${this.isTrained ? "trained" : "untrained"} dog barks!`)
    }
}

const dog = new Dog('Rickie', true)
dog.makeSound();

