// Logic Practice

// 1. Positive or Negative
// Create a program that checks if a number stored in a variable is positive or negative. 
// Log "The number is positive" if it's greater than zero, otherwise log "The number is negative."

// 2. Minimum Age for Driving
// Write a program that checks a person's age stored in a variable and logs "Can drive" if they are 16 or older. 
// If they are under 16, log "Cannot drive."
const LegalDrivingAge = 16;
let TestAge = 14;

if (TestAge >= LegalDrivingAge) {
    console.log ('Welcome to driving!')
} else {
    console.log ('Sorry, see you later!')
};


// 3. School Grade Levels
// Create a program that categorizes school levels based on a student's grade stored in a variable.
// Use the following categories: "Elementary" for grades 1-5, "Middle" for grades 6-8, and "High" for grades 9-12. 
// Log the school level.

const ElementaryGrades = 1-5;
const MiddleSchoolGrades = 6-8;
const HighSchoolGrades = 9-12;
let TestGrade = 10;

if (TestGrade <= ElementaryGrades) {
    console.log ('You`re in Elementary School!')
} else if (TestGrade <= MiddleSchoolGrades) {
    console.log ('You`re a Middle Schooler!')
} else if (TestGrade <= HighSchoolGrades) {
    console.log ('You`re a High Schooler!')
}


// 4. Basic Discount System
// A shop offers a discount for purchases over $50. 
// Write a program where the total purchase amount is stored in a variable. 
// If the amount is over $50, calculate the discount and log it. Otherwise, log "No discount available."


// -----------------------------------------------------------------
//! FIZZBUZZ

// Run through all the numbers from 1-100
// Log the number and "FizzBuzz" if the number is divisible by 3 and 5
// Log the number and "Fizz" if the number is divisible by 3
// Log the number and "Buzz" if the number is divisible by 5
// Log the number if none of the above conditions are true

// EXTRA: 

// Modify the FizzBuzz problem to allow the user to choose a max integer.
// (example: the user is prompted for a number, they choose 15, so the problem runs through the numbers 1 to 15)


for (let i = 1; i <= 100; i++) {
    console.log(`${i} ${i%3 === 0 && i%5 ===5}`)
}
//TODO: return to this later, review the fizz buzz conditionals and gates
//TODO: DUE SUNDAY at the latest. Review using zoom recording if absolutely necessary

// EXTRA: 

// Modify the FizzBuzz problem to allow the user to choose a max integer.
// (example: the user is prompted for a number, they choose 15, so the problem runs through the numbers 1 to 15)

// LOOP PRACTICE
// -----------------------------------------------------------------
//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.
//! If the input is shorter than 4 characters, nothing should be logged.

// -----------------------------------------------------------------
//! Pick a random number. Prompt the user to guess a number. If the number is correct,
//! end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

// -----------------------------------------------------------------
//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

// COMPARISON PRACTICE
// -----------------------------------------------------------------
//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    or less than/equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name
//!  - Log their name in reverse to the console.

