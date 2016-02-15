---
layout: default
---

![](/img/first-function.jpg)

Mentions & Reactions
Include: mentions, reactions, and user group mentions


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

To capture keystroke we need to add an event handler (function) to the body of the html document's `onkeydown` event.

You can use the display function to display the keycode on the screen `displayMessage(e.keyCode);`

Use the `keyCodeName` function you created above to display up, down, left or right on the screen using the `displayMessage` function when arrow keys are pressed.

{% highlight javascript %}

body.onkeydown = function(e){
    // this function is called when keys are pressed
    displayMessage(keyCodeName(e.keyCode))
};

{% endhighlight %}
