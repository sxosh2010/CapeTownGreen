---
layout: default
---

# Moving the taxi forward

![](/img/move-the-taxi.jpg)

The taxi should move forward when the right arrow is pressed. The taxi's position is determined by a class attached to it. There are nine classes: `.slot-one-of-nine` to `.slot-nine-of-nine`. Attach the next class to the taxi elements as the forward key is pressed.

The algorithm you will use to move the taxi forward is:

    1. initialize a global variable (declare it outside `onkeyup`) called `taxiLocationCounter` to 1;
    2. when the forward key is pressed increment `taxiLocationCounter` by 1;
    3. when the back key is pressed decrement `taxiLocationCounter` by 1;
    4. make sure that the counter variable never get's bigger than 9 or less than 1;
    5. translate the counter's value into class names;
    6. when the forward key is pressed, replace the old location class with the new location class on the taxi html element.

Go ahead and implement steps 1 to 4. Display the value of `taxiLocationCounter` on the screen using the `displayMessage` function. See the result of your work at http://localhost:8008/taxi.html

### Translate counter into a classname

Create a function called `createLocationClass` in `app.js`, that takes an number between 1 and 9 and returns a string as in the table below.

parameter  | returns          |
-----------|------------------|
1          | slot-one-of-nine
2          | slot-two-of-nine
3          | slot-three-of-nine
4          | slot-four-of-nine
5          | slot-five-of-nine
6          | slot-six-of-nine
7          | slot-seven-of-nine
8          | slot-eight-of-nine
9          | slot-nine-of-nine

Open the http://localhost:8008/tests.html page make sure the `createLocationClass` tests are passing. You need to refresh the page.

Use the `createLocationClass` function to get the classname for the value of `taxiLocationCounter` and display it on the screen instead of the counter.

### Create moveForward function

You will now use the class names created from `taxiLocationCounter` to let the taxi move forward.

Create a `moveForward` function, in the `app.js` file.

Use the supplied `moveTaxi`. It takes these parameters: the class, the current location class, and the next location class.

The algorithm for moving the `moveForward` function is:

* use `createLocationClass`, call it with `taxiLocationCounter`, store the result in a variable called `currentLocation`;
* increment the `taxiLocationCounter` counter by 1;
* use the `createLocationClass`, call it with the `taxiLocationCounter`, store the result in a variable called `newLocation`;
* call moveTaxi with the `currentLocation` and `newLocation` variables which contains.

> Refresh the tests to see if the tests for `moveForward` are passing.

Use `moveForward` in the `onkeydown` function, when the forward key is pressed. The taxi should move forward.

> See if you can get the taxi to reverse when the back key is pressed.
