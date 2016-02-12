# Taxi

## Introduction

Things are not well our taxi is stuck and can't move anywhere, commuters are getting annoyed!

Can you please help by getting the Taxi to move forward? Once the Taxi is moving there is chaos as the Traffic Lights are not working. You need to fix that as well and make sure that the Taxi stop at the red light. And yes when it is green it's full steam ahead. Oh yes and we would like the taxi to be able to reverse.

But now the taxi is moving full steam ahead and there is no one onboard! Fix that by adding a queue at the rank and make a taxi wait until everyone is onboard the taxi before the light goes green.

The last challenge is to make sure that people at the rank queue according to their budget. Our taxi's price is R5, R10 or R20 and they don't give change. Let commuters queue in a queue for which they have budget. If a taxi arrive it should take commuters from the queue that is matching it's fare price. Taxi fare prices are R5, R10 or R20. Be sure not to overload your taxi, it should have a `maxPassenger` attribute.

## Getting this done

To get all of the above done we provide all the html & css. You need to write some Javascript code to get the Taxi moving. It use the basic skills you learned in Codecademy, some basic DOM manipulating skills are introduced.

The DOM skills introduced are:
* working with `classList` to manipulate css styles and elements
* locating elements in the DOM using `getElementById` and `querySelector`

You should write all your code in `app.js`.

You need to install `http-server`.

Install it using : `sudo npm install -g http-server`

To start the web server open a terminal window change into the CapeTownGreen folder, the route folder you cloned from github and type `http-server`.

Open a browser and point it to `http://localhost:8080/` - you should see a Taxi, a tarred road and some traffic lights.

If you open `http://localhost:8080/tests.html` you should see some red text - these are failing unit tests... this indicates that some code that are required is not working as expected. As you progress through this workshop more and more of these tests will start to pass, if you are doing things correctly.

[First function](instructions/first_function.md)

[Move the taxi](instructions/move_the_taxi.md)

[Switch on the Traffic Lights](instructions/traffic_lights_on.md)

[Get people on the taxi](instructions/passengers.md)

## Group passengers into destinations
