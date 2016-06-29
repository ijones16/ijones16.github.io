---
layout: post
title:  "Clojure Koans: Lists"
date:   2015-10-25 13:12:21
comments: true
categories: clojure
---

Hey guys! In this episode, we are going to go over lists. I have lein koan running.
So lets jump right it!

“Lists can be expressed by function or a quoted form”
{% highlight clojure %}
(= ‘(__ __ __ __ __) (list 1 2 3 4 5))
{% endhighlight%}
1 2 3 4 5
That makes sense!

“They are Clojure seqs (sequences), so they allow access to the first”
{% highlight clojure %}
(= __ (first ‘(1 2 3 4 5)))
{% endhighlight%}
1
No need in looking up first :)

“As well as the rest”
{% highlight clojure %}
(= __ (rest ‘(1 2 3 4 5)))
{% endhighlight%}
2 3 4 5

“Count your blessings”
{% highlight clojure %}
(= __ (count ‘(dracula dooku chocula)))
{% endhighlight%}
We looked up count in the previous episode. All it does is count the items in the sequence.
3

“Before they are gone”
{% highlight clojure %}
(= __ (count ‘()))
{% endhighlight%}
0

“The rest, when nothing is left, is empty”
{% highlight clojure %}
(= __ (rest ‘(100)))
{% endhighlight%}
‘() An empty list.

“Construction by adding an element to the front is easy”
{% highlight clojure %}
(= __ (cons :a ‘(:b :c :d :e)))
{% endhighlight%}
‘(:a :b :c :d :e).
The technical definition of cons: Returns a new seq where x is the first element and seq is the rest.

“Conjoining an element to a list isn’t hard either”
{% highlight clojure %}
(= __ (conj ‘(:a :b :c :d) :e))
{% endhighlight%}
The thing about conj is that on a list that it will only conjoin on the front were as on a vector, it will conjoin on the back. Something to look out for.
‘(:e :a :b :c :d)

“You can use a list like a stack to get the first element”
{% highlight clojure %}
(= __ (peek ‘(:a :b :c :d :e)))
{% endhighlight%}
Peek allows you to use the list as a stack.
:a

“Or the others”
{% highlight clojure %}
(= __ (pop ‘(:a :b :c :d :e))) 
{% endhighlight%}
:b :c :d :e

“But watch out if you try to pop nothing”
{% highlight clojure %}
(= __ (try 
        (pop ‘()) 
        (catch IllegalStateException e 
            “No dice!”)))
{% endhighlight%}
“No dice!”

“The rest of nothing isn’t so strict”
{% highlight clojure %}
(= __ (try 
        (rest ‘()) 
                (catch IllegalStateException e 
                  “No dice!”))))
{% endhighlight%} 
‘()
This will return a list.
With that we have completed the third koan!