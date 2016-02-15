---
layout: default
---

![](/img/first-function.jpg)

## First function

Write a function called `keyCodeName` in the `app.js` file.  It takes in a keycode and return the name of the key that was pressed.
It should support the up, down, left and right key codes. It should return blank for all other keyCodes.

The keycodes are:

 keycode   | key name
-----------|-----------
39         | right
37         | left
38         | up
39         | down            

Test it by calling `keyCodeName(39)` in the console.

## Second function

To capture keystrokes we need to add an event handler (function) to the body of the html document's `onkeydown` event.

Use the `keyCodeName` function you created above to display up, down, left or right in the console using the `displayMessage` function when the arrow keys are pressed.

{% highlight javascript %}
body.onkeydown = function(e){
    // this stuff is called when keys are pressed
};
{% endhighlight %}

The `e` is short for event. The code above says "When I do `onkeydown` on `body`, save the result as `e` so that I can use it later."

## Third function

Now let's display the message on the web page itself. Write a function to display the keycode inside `#message` on the screen. The function should like a bit like this `displayMessage(e.keyCode);`.
