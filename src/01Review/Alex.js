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
//* document is shorthand by "window document. It's like your HTML file is represented as a document
//* in a js file

//? Q2
//* let class1List = document.getElementsByClassName("class1")

//! Query Selector
//* let class1List2 = document.querySelectorAll("class1")

//? Q3

//! Common Ones
/*
onclick, ("on" event names are typically named after the attribute)
select,
onenter,
exit
keypress, keyup, keydown
focus, focusin, focusout
error,
load,
mousedown, mouseleave, mousemove, mouseover, mouseout,
resize,
submit
*/
//todo: Note: SPA means single page app


//* input.addEventListener('eventType')


//? Q3.5
//? Ways to DO eventhandling
//* element.addEventListener(event_name, myFunction)
//* window.addEventListener(event, myFunction)
    //! window.addEventListener(
    //! "load"
    //! () => console.log(This webpage has loaded!)
    //! )
    //* The above code would listen to the event of the webpage loading
    //* Upon the webpage loading, it would run whatever associated functions
    //* were set to run at that moment
//todo: Note, there are ways to remove event handlers within JS


//? Q4

//todo: Alex note special!!!
//todo: The way events are handled are through "Bubbling Up"
//todo: Suppose the following code exists:
/*
<div id="id1">


*/
//! Fill this out with code later
//todo: When div 2 is clicked, both div 2 and div 1 are selected by the event listener
//todo: This is because id1 contains id2 as a child, and the event bubbles up to the parent
//todo: They have a handler for the SAME event, so every ascendent with the same event will get selected
//todo: You can stop this with "event.stopPropagation();"
//todo: It's a function off of the event class

//? Q4 for real this time

//* Every element has a .style property
//* Their values are ALWAYS strings, and will use CSS terminology

/*
    let testDiv = document.getElementById("test") (NOTE: THIS IS A VARIABLE);
    testDiv.style.boxShadow = "inset 10px 10px";
    testDiv.style.border = "1rem"
    testDiv.Attribute;

*/
//todo: ALEX SPECIAL TIPS
//todo: There are two different types of units: absolute and relative
//todo: Relatives are better for site interactivity and device compatibility

//todo: em, ex, ch, rem, vw, vh, vmin, vmax, %
//! Alex commonly likes to use rem


//? Q PROJECT TANGENT

// todo: you can set attributes that don't have any meaning, so they can be used by my script
//todo: in terms of html, they don't mean anything in html, but they hold information for js to read
//todo: <div class="classname" fake-attribute-name="storedinformation">
//todo: can be accomplished with className.setAttribute("attribute", "value")
//todo: this can be done with ids as well with className.setId
//! Doing it like this allows us to dynamically change the attribute values we make WITIH js
//! Otherwise, in html, attributes are pretty static
//! A good case for this is ADDING and REMOVING CLASSNAMES


//? Q5

//* This will be accomplished off of the document
//* document.createElement(element)

//! ADD CODE HERE

//* Here's why we do this:
//* Allowing yourself to create elements like this allows us to make "Single Page Apps" (SPAs)
//* It allows us to change things that appear on a screen without having to make a new page
//* and have to minimize communication between the network and the user
//todo: ALSO!!! It allows us to add elements to a webpage non-invasively
//todo: We can add elements that will be affected by the JS and CSS that already exists
//todo: You can append off of the body OR the document


//? Q6

//* The event just fired, I am INSIDE the event, I want to know which element did it.
//* event.target OR event.currentTarget
//! target will highlight the EXACT element that triggered the event,
//! currentTarget will ALWAYS point to who owns the event listener
//! The VALUES change. Current Target will keep track of the parent
//! Target will point to the CHILD that caused the event
/*
{
const ratHandler = (event) => {
    console.log(
        "was triggered by element",
        event.target
    );
    event.stopPropagation();
};
let testDivKid = document.querySelector((test))

}
*/

//todo: Lets us use ONE handler to modify multiple elements.
//todo: We write ONE handler, then use that handler to look at multiple
//todo: elements, then affect ONLY the element that needs to be affected
//todo: at that time. There are many ways to do this, but by listening
//todo: for WHERE the event came from, we can specify elements based on
//todo: whether or not they've been selected.


//? Q7

//todo: NOTE: If elements are "truthy" then they exist, otherwise they don't exist

//* variable.remove
/*
let deleteButton = document.querySelector("")
*/

//? ---------PROTOTYPICAL FUNCTIONS-------------



//? Q1
//* Array to String and String to Array

{
    const thatArray = [1, 3, 5, 7, 9]

    const thisArray = [2, 4, 6, 8, 10]
    const myFunc = (myArray) => {
        let finishedString = ""
          let delimAdder= ", "
        for (let i =0; i < myArray.length;i++ ){
            let numVal = myArray[i]
            let stringPart = "" + numVal
            
            if (i != myArray.length - 1) {
                finishedString = finishedString + stringPart + delimAdder

            }
            else {
                finishedString = finishedString + stringPart
            }

        }

        return finishedString;
    }
    myFunc(thisArray) //! AN ARGUMENT = WHAT SHIT THE FUNCTION IS WORKING ON!!!!!!!!
let myFuncReturn = myFunc(thisArray)
    console.log(myFuncReturn)
}

//! YOU FORGOT ABOUT SPLIT!!! REVIEW SPLIT!!!

{
//* S --> A
const myString = "1, 2, 6, 9, 0, 4"; //! Uniform Seperator/deliminor: , 
let myArray = [];
const myFunction = (myString) => {

    return{

    }
}
}