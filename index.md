---
layout: default
---

# Taxi

## Introduction

![](/img/introduction.jpg)

Things are not well: our taxi is stuck and can't move anywhere. Commuters are getting annoyed!

Can you please help by getting the Taxi to move forward? Once the Taxi is moving there is chaos as the Traffic Lights are not working. You need to fix that as well and make sure that the Taxi stops at red lights. And yes when it is green it's full steam ahead. Oh yes and we would like the taxi to be able to reverse.

But now the taxi is moving full steam ahead and there is no one onboard! Fix that by adding a queue at the rank and make a taxi wait until everyone is onboard the taxi before the light goes green.

The last challenge is to make sure that people at the rank queue according to their budget. Our taxi's price is R5, R10 or R20 and they don't give change. Let commuters wait in queues arranged by budget. If a taxi arrives, it should take commuters from the queue that is matching it's fare price. Taxi fare prices are R5, R10, or R20. Be sure not to overload your taxi, it should have a `maxPassenger` attribute.

## Getting this done

To get all of the above done we at codeX will provide all the HTML & CSS. You need to write some JavaScript code to get the Taxi moving. It uses the skills you learned in Codecademy and we introduce some DOM manipulation skills.

The DOM skills introduced are:

* working with `classList` to manipulate styles and elements;
* locating elements in the DOM using `getElementById` and `querySelector`.

You should write all your code in `app.js`.

You need to install `http-server`. Install it using : `sudo npm install -g http-server`. To start the web server, open a terminal window, change into the CapeTownGreen folder (the one you cloned from GitHub) and type `http-server`.

Open a browser and point it to `http://localhost:8080/taxi.html`: you should see a Taxi, a tarred road, and some traffic lights. (`localhost` is the same as `127.0.0.1` that you'll have noticed in your terminal. The URL above is the same as `http://127.0.0.1:8080/taxi.html`)

If you open `http://localhost:8080/tests.html` you should see some red text: these are failing unit tests. This indicates that some required code is not working as expected. As you progress through this workshop more and more of these tests will start to pass, if you are doing things correctly.

[First function](instructions/first_functions.html)

[Move the taxi](instructions/move_the_taxi.html)

[Switch on the Traffic Lights](instructions/traffic_lights_on.html)

[Get people on the taxi](instructions/passengers.html)

[Group passengers into destinations](instructions/group_passengers.html)
