---
layout: post
title:  "Objects in Javascript"
date:   2015-08-18 13:12:21
categories: javascript fundamentals
---

Objects in Javascript are based off of prototypal inheritance. Prototypal inheritance is the
key to understanding Javascript. It doesn't behave like a "normal" Object Oriented language.

These prototypes are similar to classes in languages like Java or C# in that you can have multiple instances of these prototypes. The thing to understand about Prototypes, is that they are objects themselves. 

The basic syntax for an object is simple:
{% highlight javascript%}
var simpleObject = new Object();

console.log(simpleObject);
// => {}
{% endhighlight %}






[@_ericelliott](https://twitter.com/_ericelliott) wrote a well explained and thorough  [chapter](http://chimera.labs.oreilly.com/books/1234000000262/ch03.html) on objects in Javascript.
