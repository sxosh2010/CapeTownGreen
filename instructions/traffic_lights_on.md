## Traffic Light

Now that you have the taxi moving we need to get the Traffic Light working and get the taxi's to stop at red lights.

For that we are going to create a constructor function / class to control Traffic Lights, it will use the `taxiLocationCounter` counter to find the one closest to the taxi.

To change the traffic lights we need to add and remove css classes to the `robot` css elements using the [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) objects.

Our traffic light constructor function should have these functions:

  function name | functionality                                                              |
----------------|----------------------------------------------------------------------------|
`makeGreen`     | switch on the green light on the traffic light
`makeOrange`    | switch on the orange light on the traffic light
`makeRed`       | switch the red light on the traffic light
`color`         | return the current color of the traffic light based on the internal state

It should take a number as a constructor parameter which should be the current value of the `taxiLocationCounter`.

Create a function similar to `createLocationClass` called `createTrafficLightClass` which take a number as a parameter and return a string like `one-of-nine` through to `nine-of-nine`.

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

Use code like this in the `makeGreen`, `makeRed` etc functions.

Instantiate a TrafficLight object instance in the onkeydown function using the `taxiLocationCounter` to have an instance of the TrafficLight closest to the taxi.

Here's an example:

```javascript
var trafficLight = new TrafficLight(taxiLocationCounter);
```

Make the traffic light go red when pressing the up arrow an green when pressing the down arrow. As the taxi moves forward, the set of lights just in front of the taxi should be affected by the up and down arrows.

The next thing is to stop a taxi from moving forward if the light is red. Check the value of the `trafficLight.color()` if it is red - stop the taxi from moving forward. Toggling the TrafficLight to green should allow the taxi to move forward.
