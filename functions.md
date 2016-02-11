# Taxi

## Introduction

Things are not well our taxi is stuck and can't move anywhere, commuters are getting annoyed!

Can you please help by getting the Taxi to move forward? Once the Taxi is moving there is chaos as the Traffic Lights are not working. You need to fix that as well and make sure that the Taxi stop at the red light. And yes when it is green it's full steam ahead. Oh yes and we would like the taxi to be able to reverse.

But now the taxi is moving full steam ahead and there is no one onboard! Fix that by adding a queue at the rank and make a taxi wait until everyone is onboard the taxi before the light goes green.

The last challenge is to make sure that people at the rank queue according to their budget. Our taxi's price is R5, R10 or R20 and they don't give change. Let commuters queue in a queue for each budget. If a taxi arrive it should take commuters from the queue that is matching their fare price. Taxi fare prices are R5, R10 or R20. Be sure not to overload your taxi, it should have a `maxPassenger` attribute.

## Getting this done

To get all of the above done we provide all the html & css. You need to write some Javascript code to get the Taxi moving. It you the basic skills you learned in Codecademy and some basic DOM manipulating skills are introduced.

The required DOM skills are:
* working with `classList` to manipulate css styles and elements
* locating elements in the DOM using `getElementById` and `querySelector`

## First function

Write a function called `keyCodeName` that take in a keycode and return the name of the key that was pressed.
It should support the up, down, left and right key codes.
It should return blank for all other keyCodes.

## Capturing key strokes

To capture keystroke we need to add an event handler (function) to the body of the html document's `onkeydown` event

You can use the display function to display the keycode on the screen `displayMessage(e.keyCode);`

Use the `keyCodeName` function you created above to display up, down, left or right on the screen when array keys are pressed.

```
body.onkeydown = function(e){
    // this function is called when keys are pressed
};
```

## Moving the taxi forward

The taxi should move forward when the forward arrow is pressed. The taxi's position is determined by a css class attached to it. There are nine classes `.one-of-six` to `.six-of-nine`. Attach the next class to the taxi elements document as the forward key is pressed.

The algorithm you will use to move the taxi forward is:

    1. initialize global variable calculate_locationled `taxiLocationCounter` to 1
    2. when the forward key is pressed increment `taxiLocationCounter` by 1
    3. when the back key is pressed decrement `taxiLocationCounter` by 1
    4. make sure that the counter variable never get's bigger than 9 or less than 1
    5. translate the counter's value into a classname like `one-of-six`, `one-of-three` using the `createLocationClass` function
    6. remove the old location class and add the new location class to the taxi html element when the forward key is pressed

Go ahead and implement steps 1 to 4.

### Translate the classname

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

### Give the taxi some class

Now that we have a way of creating the right css classes, we need to attach right classes to the taxi.

To do that do this:

* increment the `taxiLocationCounter` variable by one each time the forward key is pressed, display the counter on the screen using the `displayMessage` function
* next use the `createLocationClass` to get the matching classname for the value of `taxiLocationCounter` and display it instead of the counter.

### Create moveForward function

Create a `moveForward` function, in the app.js file, to move the taxi forward.

Use the supplied `moveTaxi`, it takes two parameters the class and the current location and the next location class.

The algorithm for moving the `moveTaxi` function is:

* use `createLocationClass`, call it with the `taxiLocationCounter` store the result in a variable called `currentLocation`
* increment the `taxiLocationCounter` counter by 1
* use the `createLocationClass` call it with the `taxiLocationCounter`, store the result in a variable called `newLocation`
* call moveTaxi with the `currentLocation` and `newLocation`

You should use this algorithm in the `onkeydown` function, when the forward key is pressed. See if you can get the taxi to reverse when the back key is pressed.

## Trafficlight

Now that you have the taxi moving we need to get the Traffic Light working and get the taxi's to stop at red lights.

For that we are going to create a constructor function / class to control Traffic Lights, it will use the `taxiLocationCounter` counter to find the one closed to the taxi.

To change the traffic lights we need to add and remove css classes to the `robot` css elements using the [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) objects.

Our traffic light constructor function should have these functions:

  function name | functionality                                                              |
----------------|----------------------------------------------------------------------------|
`makeGreen`     | switch on the green light on the traffic light
`makeOrange`    | switch on the orange light on the traffic light
`makeRed`       | switch the red light on the traffic light
`color`         | return the current color of the traffic light based on the internal state

It should take a number as a constructor parameter which refers to the current value of the `taxiLocationCounter`.

Create a function similar to `createLocationClass` called `createTrafficLightClass` it should take a index number as a parameter and return strings like `one-of-nine` through to `nine-of-nine`.

To locate a Traffic Light in the DOM you can use the `document.querySelector` function.

You can use it like this:

```javascript

//should return ".three-of-nine"
var className = createTrafficLightClass(3);

//get the element to use
var trafficLightElement = document.querySelector(className);
```

To change the traffic light you can add and remove css classes like this:

```javascript
// make it green
trafficLightElement.classList.add("lights-go");

//make it orrange
trafficLightElement.classList.add("lights-slowdown");

// remove orange
trafficLightElement.classList.remove("lights-slowdown");

// make it red
trafficLightElement.classList.add("lights-stop");
```

Instantiate a TrafficLight object instance in the onkeydown function using the `taxiLocationCounter` to have an instance of the TrafficLight closed to the taxi.

Here's an example:

```javascript
var trafficLight = new TrafficLight(taxiLocationCounter);
```

Make the lights go red when pressing the up arrow an green when pressing the down arrow. As the taxi moves forward, the set of lights just in front of the taxi should be affected by the up and down arrows.

The next thing is to stop a taxi from moving forward if the light is red. Check the value of the `trafficLight.color()` if it is red - stop the taxi from moving forward. Toggling the TrafficLight to green should allow the take to move forward.

## Passengers

### A taxi can load Passengers

### Group passengers into destinations
