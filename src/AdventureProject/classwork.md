## Classwork

Create a text based game with at least 5 steps in the adventure. The user will be prompted with different questions at different steps. Essentially, you will be creating a text based flowchart.

- Start by having the player enter their name. Once they do that, save it into an object.
- Next, have them pick a class to be. Tell them the options are "Warrior" or "Rogue" (Or more if you prefer).
  - If they type warrior (or rogue), save their class into the object.
  - If they did not enter one of the two, prompt them again and tell them it was an invalid entry.
- From here, for every prompt, refer to them as `"{their Name} the {their class}"`.
- Set up 5 obstacles that they must overcome and ask them what they'd like to do. For example:
  ```
  You come across a river. Would you like to "Swim" across or "Pay" for a ferry.
  ```
  Depending on what the user inputs, follow along with your story and save their choice into the object under an appropriate key.
- At the end of the steps you've set up, tell their story based off the actions they chose.
- (Optional) For added difficulty, add health/damage to the game. You can also add branching choices. For example, if they chose to pay for a ride, they might not be able to afford something later. Or, if they chose to avoid a fight, it adds new options that weren't accessible if they chose to fight.

You will utilize 02classwork.html and 02classwork.js for this. You shouldn't need any HTML for now, but you can use `prompt` to get input from the user, and `alert` (or `console.log()`) to deliver information.