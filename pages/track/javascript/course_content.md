--
title: "Javascript"
date: "28 April 2023"
--

# Javascript Internals

## Event Loop
 As you might already know javascript is single threaded, so how does it handle asynchronous task.
 It uses a concept of event loop.
 Event Loop constantly keeps looking for a new task inside the `task queue`. When we make a web api call like on setTimeout or setInterval method.
 
 - Then it goes to the Web API section. which then is moved to `task queue`.
 - Event loop picks from the `task queue` and moves it to the `execution stack`.

## Note
> Event loop is a very important concept and questions are frequently asking from this concept.
> So don't skip it understand it properly and frame your language properly so that it is presentable.