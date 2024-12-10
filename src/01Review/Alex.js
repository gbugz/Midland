//* let a = '0';
//* let b = 0;

//* console.log(a == b, a === b)
//* The first one will log as true because the types are implicitly coerced
//* The second one will log as false because the system denys the coersion

let x = [];


//* let a = [[1, 2, 3], [4, 5, 6]];
//* for (let i = 0; i, a.length; i++) {
    //? i is set to 0. a.length = 2
//*    for (let j = 0; j < a[i].length; j++) {
        //? j is set to 0. a[i] = a[0], a[i].Length = 3
        //? both i and j will add from the third section, then check
        //? the second section to see if it's still true
//*        console.log(a[i][j], i, j);
//*    }
//* }
//? In terms of order: i and j are just numbers. When we start
//? we will as for the 0th element of the a array, because i equals zero
//? i++ and j++ allow us to add onto our number until we increment enough to
//? select everything within our arrays in the broader a array


//* let hello = ['greeting', 'word']
    //* for ( Initialization (optional) ; conditional (required) ; update step (optional))
                //! Initializing lets us declare a variable within the scope of the for loop
                //! Happens ONCE and BEFORE ANYTHING ELSE
                //? The conditional is the same as a while loop conditional, checks for trueness
                //TODO: The update step modifies, then the loop checks the condition 
                //* When the for loop runs what's in the body, it just runs the body
                //*If something is defined in the for loop, you can call it in the body

/*! let user = {
    name: 'Billy',
    petDog: {
        name: 'Roger'
    }
}
*/
//* let petName = user["petDog"]["name"]
//*console.log (petName)
//! THE ABOVE WORKED! 
//! Arrays are objects, and OBJECTS are objects
//! Arrays implicitly have a hashmap already, with keys set as index locations
//! As opposed to OBJECTS, which have their keys explicit
//! The following would also work:
//* let petName = user.petDog.name
//* console.log (petName)
//Todo: let petName = user?.petDog?.name;  (This will set the value to null if the key returns a false value)

//? Question 8
//Todo: If 2 and 3 are numbers, they become added
//todo: If '2' and '3' are strings, they are concatenated!

//? Question 9
//* let userName = "Frank"
//* console.log (`${userName}`)
//! The ` helps us denote a string


//? Question 10
/*
const functionality = () => {
    console.log("haha")
}

const durationOnce = 1000;
const durationRepeat = 2000;
let timerOnce = setTimeout(functionality, durationOnce);
let timerRepeat = setInterval(functionality, durationRepeat);
    Both will cause the function to wait for the duration variable, then call the function
    We set variables with timerOnce and timerRepeat, which return handles
    clearTimeout() and clearInterval() can end these after a specific

*/

//? Q11
//* Scope lets us build libraries while avoiding name-space collision, and
//* work within specific parts of predefined code

//? Q13

//* The inputs of a function is a perameter. Parameters are unknown until defined
//* When calling a function, the values are arguments. Arguments go INTO THE FUNCTION when we CALL the FUNCTION

//? Q16

//* Boolean Logic! Same as symbolic logic but slightly different

//? Q19

//* Arrow functions are bespoke function forms, that don't require the word "function"
//* They're nameless, and fit well within other spaces like variables
//* Way less verbose



//! THE DOM!!!

//? Q1
//* Document Object Model. An API that allows JS to interact with HTML and XML
//* APIs are functions to interact with a thing!
//* Dynamic changes are possible through the DOM, WHILE the html is on the user's computer
//* This is how buttons gain their functionality

//? Q2
//* document.getElementsByClassName("class1")