---
layout: default
title: Extempore on Windows 
tags:
- extempore
- windows

---

{% for tag in page.tags %}
<div class="tag">{{ tag }}</div>
{% endfor %}


Note: In Draft

# Extempore on Windows 

If you're interested in getting started on Extempore on Windows but not sure where to begin, here is a quick run through.

## Basics

Extempore runs as a service and executes any code sent to it over a TCP socket. The basic interaction with Extempore is through a text editor. For a demonstration of this in action see [this video](http://vimeo.com/78788032). This is often described as a compiler as a service (CaaS) model.

## What Do I Need?

To get started live coding in Extempore you need two things:

-Extempore (executable and libraries)
-Text Editor (and an associated plugin)

### Extempore

Extempore is available from [insert link to binary here?]. The contents of this download have everything you need to start running Extempore.

Alternatively, if you are interested in building from source, Extempore is available at [https://github.com/digego/extempore].

If you have downloaded Extempore or have compiled it from source, open up a terminal, change to the directory containing extempore and run the executable:
    $ ./extempore.exe

This will start the extempore server, waiting for code to be sent from the text editor. Press `ctrl-C` to kill the server.

### Text Editor

To start writing code and interacting with the server, you will need a text editor. Any text editor that has the ability to write to TCP sockets will work well with Extempore. Plugins for some text editors including Emacs, Vim and Sublime Text are provided with Extempore.

Setup details are included with the plugins but for the sake of this example example, we will set up using Sublime Text. Download the plugin, open Sublime Text and go to Preferences->Browse Packages. Copy the downloaded plugin into the folder.

This plugin allows the text editor to communicate with the extempore process, allowing you to evaluate code.

## Creating Sound

You now have a fully functional live coding environment. To test it out do the following:
-Start the Extempore process from the terminal (run "extempore.exe")
-Open Sublime
-Connect to the Extempore process by typing `Ctrl-X Ctrl-Y` and press enter selecting the default option (localhost:7099)
-Copy the following code into Sublime:

```scheme

(sys:load "libs/core/math.xtm")
(sys:load "libs/core/audio_dsp.xtm")
(sys:load "libs/core/instruments.xtm")

(bind-func dsp:[float,float,i64,i64,float*]*
    (lambda (in time chan dat)
      (sawlead in time chan dat)))

(dsp:set! dsp)

(define sawlead-recursion
  (lambda (beat dur)
    (play sawlead 60 80 dur)
    (callback (*metro* (+ beat (* .5 dur))) 'sawlead-recursion (+ beat dur) dur)))

(sawlead-recursion (*metro* 'get-beat 4) 1/4)

```

-Select all the text and type `Ctrl-X Ctrl-X` to evaluate the selection

In the extempore process terminal window you should see a whole bunch of output. These are functions from the standard libraries being loaded.


## Where To From Here?

One of the best ways to learn Extempore is through examples. Example code is provided within the Extempore examples directory. If you are interested in the audio side of Extempore, have a look at audio101.xtm. Alternatively, if graphics interest you, have a look at graphics101.xtm.


