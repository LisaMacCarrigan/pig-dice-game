# Pig Dice
_A program where two users can play Pig dice against each other, 08.24.16_

#### By **Samuel Peppard, Lisa MacCarrigan**

## Description

This is a two player game of Pig dice. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold". The first player to score 100 or more points wins.

## Specifications

#### 1. The program begins when a user selects the "Play" button on the web page.

* Example Input: Click/Press "Play"
* Example Output: Show the game user interface.

#### 2. When Player rolls, return a random number between '1' and '6'.
  2a. If current Player rolls '2', they go again.
    * Example Input: Click/Press "Roll"
    * Example Output: A 2 is rolled, so the current Player is prompted to roll again.
  2b. If current Player rolls '1', they score nothing, and their turn is over.
    * Example Input: Rolls '1'
    * Example Output: Current Player's score for that turn is 0, and it becomes the other Player's turn.

#### 3. If current Player rolls a number between '2' and '6', Player is asked to 'hold' or 'roll again'.

* Example Input: Rolls '2'
* Example Output: Current Player's score for that turn is 2, and they are prompted to roll again or hold.

#### 4.


## Setup/Installation Requirements

* Clone this repository
* If editing, open project directory in Code Editor of choice
* If viewing, open index.html in a web browser

## Known Bugs

No known bugs.

## Support and contact details

For comments or questions, please email sampeppard@gmail.com

## Technologies Used

HTML
CSS
JavaScript
jQuery version 3.1.0.
Bootstrap version 3.3.7.

## Link to project on Github Pages

https://sampeppard.github.io/ping_pong/

### License

*This application is licensed under the MIT license*

Copyright (c) 2016 **Samuel Peppard, Lisa MacCarrigan**
