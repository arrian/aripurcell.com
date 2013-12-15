---
layout: post
title: Extempore on Windows 
tags:
- extempore
- windows

---


If you're interested in getting started on Extempore on Windows but not sure where to begin, here is a quick run through.

## Basics

Extempore runs as a service and executes any code sent to it over a TCP socket. The basic interaction with Extempore is through a text editor. For a demonstration of this in action see [this video](http://vimeo.com/78788032). This is often described as a compiler as a service (CaaS) model.

## Prerequisites

To get started live coding in Extempore you need two things:

- Extempore (executable and libraries)
- Text Editor (and an associated plugin)


### Extempore

Extempore is available from [GitHub](https://github.com/digego/extempore). Either download the [zip](https://github.com/digego/extempore/archive/master.zip) or [clone the repository](github-windows://openRepo/https://github.com/digego/extempore). To build for the first time, open the terminal in the downloaded directory and run 'scons --incl-deps'. This will download and compile dependencies and then build Extempore. Depending on your computer and internet connection, this may take some time. If you plan to do some development in Visual Studio, run 'scons --solution'. This will generate an Extempore.sln file. Otherwise running just 'scons' with no arguments will compile Extempore.

After the compilation has finished you should have an 'extempore.exe'. Running this executable from the command line will start the extempore server, waiting for code to be sent from the text editor. Press `ctrl-c` to kill the server.

### Text Editor

To start writing code and interacting with the server, you will need a text editor. Any text editor that has the ability to write to TCP sockets will work well with Extempore. Plugins for some text editors including Emacs, Vim and Sublime Text are provided with Extempore.

Setup details are included with the plugins but for the sake of this example example, we will set up using Sublime Text. Download the plugin, open Sublime Text and go to Preferences->Browse Packages. Copy the downloaded plugin into the folder.

This plugin allows the text editor to communicate with the extempore process, allowing you to evaluate code.

## Creating Sound

You now have a fully functional live coding environment. To test it out do the following:
- Start the Extempore process from the terminal (run `extempore.exe`)
- Open Sublime
- Connect to the Extempore process by typing `ctrl-x ctrl-y` and press enter selecting the default host and port (localhost:7099)
- Copy the following code into Sublime:


{% highlight scheme %}
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

{% endhighlight %}

- Select all the text and type `ctrl-x ctrl-x`

In the extempore process terminal window you should see some output from loading the standard libraries. If all goes well you should hear some sound.

## Where To From Here?

One of the best ways to learn Extempore is through examples. Example code is provided within the Extempore examples directory. If you are interested in the audio side of Extempore, have a look at audio101.xtm. Alternatively, if graphics interest you, have a look at graphics101.xtm.


