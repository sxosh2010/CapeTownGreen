---
layout: default
---

## Moving the taxi forward

The taxi should move forward when the forward arrow is pressed. The taxi's position is determined by a css class attached to it. There are nine classes `.one-of-six` to `.six-of-nine`. Attach the next class to the taxi elements document as the forward key is pressed.

The algorithm you will use to move the taxi forward is:

    1. initialize a global variable (declare it outside onkeyup) called `taxiLocationCounter` to 1
    2. when the forward key is pressed increment `taxiLocationCounter` by 1
    3. when the back key is pressed decrement `taxiLocationCounter` by 1
    4. make sure that the counter variable never get's bigger than 9 or less than 1
    5. translate the counter's value into a classnames
    6. when the forward key is pressed replace the old location class with the new location class on the taxi html element

Go ahead and implement steps 1 to 4. Display the value of `taxiLocationCounter` on the screen using the `displayMessage` function.

### Translate counter into a classname

Create a function called `createLocationClass` that takes an number between 1 and 9 and returns a string as in the table below.

parameter  | returns          |
-----------|------------------|
1          | one-of-nine
2          | two-of-nine
3          | three-of-nine
4          | four-of-nine
5          | five-of-nine
6          | six-of-nine
7          | seven-of-nine
8          | eight-of-nine
9          | nine-of-nine

Run mocha the test.html page make sure the `createLocationClass` tests are passing.

Use the `createLocationClass` function to get the classname for the value of `taxiLocationCounter` and display it instead of the counter.

### Create moveForward function

You will now use the classnames created from `taxiLocationCounter` to let the taxi move forward.

Create a `moveForward` function, in the app.js file.

Use the supplied `moveTaxi`, it takes two parameters the class and the current location and the next location class.

The algorithm for moving the `moveTaxi` function is:

* use `createLocationClass`, call it with the `taxiLocationCounter` store the result in a variable called `currentLocation`
* increment the `taxiLocationCounter` counter by 1
* use the `createLocationClass` call it with the `taxiLocationCounter`, store the result in a variable called `newLocation`
* call moveTaxi with the `currentLocation` and `newLocation`

Use this algorithm in the `onkeydown` function, when the forward key is pressed.

> See if you can get the taxi to reverse when the back key is pressed.
