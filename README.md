# Flashdance Flashcards #
![alt text](../images/flashdance.png)

This project is designed to mimic flashcards that a student would use as a study aid. I implemented the theme of the 1980s smash hit Flashdance as a placeholder for the obvious reasons that this subject matter is the story of all us. Really, it is the American Dream recorded for posterity. A user will push buttons onscreen to begin study session, flip cards to the back to display answers, change to next card, and tally whether they got the cards correct or incorrect.

## Requirements

As this project was built using HTML, CSS, and jQuery, no dependencies are required to enjoy this application.

## This project was built with...

...HTMl, CSS, and jQuery. 

My Bronze (MVP) is a working study aid to help the user by having a keyword on the front of the card and the definition on the back of the card. The user will be able to tally how many cards they got correct and incorrect. Once they have all correct, the session will be over.

This was accomplished through an array of question/answer objects written in JQuery. Event listeners were placed on the buttons to listen for user interaction and respond accordingly. When a user presses the Begin button, the game begins. When the user flips the card, if they know the answer -- they press the correct button and the card is taken out of the array and the correct number is tallied. If the user presses the incorrect button, the number is also tallied and the card remains in the array.






