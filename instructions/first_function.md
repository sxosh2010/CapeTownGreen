---
layout: default
---

## First function

Write a function called `keyCodeName` in the `app.js` file.  It takes in a keycode and returns the name of the key that was pressed.
It should support the up, down, left, and right key codes. It should return blank for all other keyCodes.

The keycodes are:

 keycode   | key name
-----------|-----------
39         | forward
37         | reverse
38         | up
39         | down            

To capture keystrokes we need to add an event handler (function) to the body of the HTML document's `onkeydown` event. Use the `keyCodeName` function you created above to display up, down, left, or right on the screen using the `displayMessage` function when arrow keys are pressed.

{% highlight javascript %}
body.onkeydown = function(e){
    // this function is called when keys are pressed
    displayMessage(keyCodeName(e.keyCode))
};
{% endhighlight %}
