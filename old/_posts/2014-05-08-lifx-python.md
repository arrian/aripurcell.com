---
layout: post
title: Python for LIFX Bulbs
tags:
- side project
- python
- lifx

---

I recently got tired of the lightbulb in my bedroom not being quite smart enough (and the annoying warmup period of my compact fluorescent). To remedy this, I investigated the modern range of smart LED lightbulbs and settled on a [LIFX](http://lifx.co/) bulb.

Setup using the Android app was a breeze with the process being the simple steps of: 
-   Plugging in the bulb
-   Downloading the app
-   Connecting to the bulb
-   Setting the Wifi network for the bulb to connect to

Not content with just using the app though, I looked around for python libraries for the bulb. A few solutions exist (eg. [derkarnold's](https://github.com/derkarnold/pylifx) and [sharph's](https://github.com/sharph/lifx-python)) but what better way to get my head around LIFX and its protocol than writing my own? So, I wrote my own which is now available on Github at [arrian/lifx-python](https://github.com/arrian/lifx-python). Feel free to download the repository and run the examples.

A quick introduction to the library is as follows:
{% highlight python %}

import lifx

# Create the LIFX connection
lights = lifx.Lifx()

# Turn on the lights
lights.on()

# Set all the lights to green
lights.set_colour(lifx.Colour.GREEN)

# Be more specific with your colour settings: 
# hue, saturation, brightness, kelvin, transition_duration
lights.set_colour(0, 10000, 10000, 1000, 5000)

# Get the lights' colours
print(lights.get_colours())

# Get the lights' labels
print(lights.get_labels())

# Get the lights' internal time
print(lights.get_time())

# Get the wifi information
print(lights.get_wifi_info())

# Get the available access points
print(lights.get_access_points())

# Asynchronous print all LIFX network packets and continue.
# Pass any function here that takes a one packet type argument.
lights.monitor(print)

{% endhighlight %}
