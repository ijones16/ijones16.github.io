---
layout: post
title:  "Clojure Koans: Equalities"
date:   2015-10-20 13:12:21
comments: true
categories: clojure
---

I’m starting this series on Clojure Koans! I’ve been super excited about Clojure lately. I’ve really been getting into functional programming lately. Here at school, at my Cs department, we focus a lot on C++ and all of it is memory management, so going over to a more functional language, I’ve really enjoyed not having to worry about allocating memory and just all the headaches that pointers bring and everything.
So, in this series I’m going to go over all of these Koans, which starts out pretty basic with equalities and heads towards the heavier stuff with macros and atoms and all of the Clojure goodness. So I’ll just make short little videos doing each koan down the list!
The first think you need is java. As you can see I’m on java 1.8. It recommends 1.5 or greater. The next thing is you need a Github account and you need to clone this repository. I have lein installed so I will be using this command. If you dont want to install lein, then script\run will work.

Here we go

The first one! Also, Im using Emacs and iterm here so I will get to show my Emacs skills or lack there of.

“We shall contemplate truth by testing reality, via equality”
{% highlight clojure %}
(= __ true)
{% endhighlight%}

True equals true. Every time I save this file the tests will run. Here, it looks like the first test past because the first failing test is To understand reality, we must compare our expectations against reality.

"To understand reality, we must compare our expectations against reality”
{% highlight clojure %}
(= __ (+ 1 1))
{% endhighlight%}

One plus one equals two. I hope thats correct!

“You can test equality of many things”
{% highlight clojure %}
(= (+ 3 4) 7 (+ 2 __))
{% endhighlight%}

Seven, Seven and Seven must all be equal.

“Some things may appear different, but be the same”
{% highlight clojure %}
(= __ (= 2 2/1))
{% endhighlight%}

Two equals two divided by one. That would be true.

“You cannot generally float to heavens of integers”
 {% highlight clojure %}
 (= __ (= 2 2.0))
 {% endhighlight%}
 
This must mean that two and the float two are not the same.

“But a looser equality is also possible”
{% highlight clojure %}
(= __ (== 2.0 2))
{% endhighlight%}

So, double equals is a looser equality. Thats true. Rather than Javascript’s loose equality by default with their double equals.

“Something is not equal to nothing”
{% highlight clojure %}
(= __ (not (= 1 nil)))
{% endhighlight%}

This is true.

“Strings, and keywords, and symbols: oh my!”
{% highlight clojure %}
(= __ (= “hello” :hello ‘hello))
{% endhighlight%}

False!

“Make a keyword with your keyboard”
{% highlight clojure %}
(= :hello (keyword __))
{% endhighlight%}

So I will copy that over there…

“Symbolism is all around us”
{% highlight clojure %}
(= ‘hello (symbol __))
{% endhighlight%}

These are great quotes ;) , ‘hello. It’s passing.

“When things cannot be equal, they must be different”
 {% highlight clojure %}
 (not= :fill-in-the-blank __))
 {% endhighlight%}
 
True.
It looks like the wonderful contributors over at Clojure koans has written a koan engine to test each of these meditations. It looks like we have finished Clojure Koans one.
I look forward to completing this series!