---
layout: default
---

## Passengers

Now we need some passengers at the Taxi Rank for our taxi to pickup. Use the `passengerList` function to create a random number of passengers.

Call it like this:

{% highlight javascript %}
//this will create a random list not bigger than 40 - with numbers 5, 10 or 20
var passengerCount = passengerCount(40);
{% endhighlight %}

Use the `displayQueueCount` function to display the number of people queueing at the rank. If the taxi is in the first block the `taxiLocationCounter` should be 1, when that is the case make the Traffic Light red and load the people queueing onto the taxi - using `displayTaxiPassengerCount` to display the amount of people on the taxi. Remember to set the number of people at the rank to 0. After a 3 second delay (use [setTimeout](https://developer.mozilla.org/de/docs/Web/API/WindowTimers/setTimeout)) - set the Traffic Light to green, the taxi should be able to pull away. Off load the passengers once you are in the ninth (last) block. Set the number of people on the taxi to 0.
