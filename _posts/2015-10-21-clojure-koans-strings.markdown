---
layout: post
title:  "Clojure Koans: Strings"
date:   2015-10-21 13:12:21
comments: true
categories: clojure
---

Hey guys, In this video Im going to go over the next Clojure Koan which goes over strings. In this video im going to be using Clojure Docs to look up functions to make sure im doing everything correctly, not that clojure koans wont tell me
lein koan run
As you can see, we are on the second clojure koan and its all about strings

“A string is nothing more than text surrounded by double quotes”
{% highlight clojure %}
(= __ “hello”)
{% endhighlight%}
“hello”

“But double quotes are just magic on top of something deeper”
{% highlight clojure %}
(= __ (str ‘world))
{% endhighlight%}

Must be “world”. You can evaluate a simple by adding a tick or a single apostrophe.

“You can do more than create strings, you can put them together”
{% highlight clojure %}
(= “Cool right?” (str __ __))
{% endhighlight%}

“Cool ” “right?” remember your whitespace ;)

“You can even get certain characters”
{% highlight clojure %}
(= \C (get “Characters” __))
{% endhighlight%}

get returns a value mapped to key, not-found or nil if not present. So to get \c we have to pass in the index 0.

“Or even count the characters”
{% highlight clojure %}
(= __ (count “Hello World”))
{% endhighlight%}

Count seems like an easy function but looking at the docs is always a good idea! Count returns the number of items in the collection. So a string is just a collections. Thats the cool thing about clojure is that almost everything can be evaluated as a collection. Theres probably some cases that I am not aware of. 11 chars

“But strings and characters are not the same”
{% highlight clojure %}
(= __ (= \c “c”))
{% endhighlight%}

False

“What if you only wanted to get part of a string?”
{% highlight clojure %}
(= “World” (subs “Hello World” __ __))
{% endhighlight%}

Subs returns the substring of s beginning at start inclusive and ending at end. Pass in the index of 6 because we want “world” of “Hello world”.

“How about joining together elements in a list?”
{% highlight clojure %}
(= __ (string/join ‘(1 2 3)))
{% endhighlight%}

“123” String/join returns a string of all elements in coll, as returned by (seq coll), separated by an optional separator.

“What if you wanted to separate them out?”
{% highlight clojure %}
(= “1, 2, 3” (string/join __ ‘(1 2 3)))
{% endhighlight%}

“, ” If you want to add anything between each element in the collection.

“Maybe you want to separate out all your lines”
{% highlight clojure %}
(= [__ __ __] (string/split-lines “1\n2\n3”))
{% endhighlight%}

“1” “2” “3” Split-lines splits the string on \n or \r\n.

“You may want to make sure your words are backwards”
{% highlight clojure %}
(= __ (string/reverse “hello”))
{% endhighlight%}

“olleh” Reverse string seems fairly straight forward.

“Maybe you want to find the index of the first occurence of a substring”
{% highlight clojure %}
(= 0 (.indexOf “hello world” __))
{% endhighlight%}

If anyone knows where I can find .indexOf. (After a quick search, it looks like .indexOf is a Java interop.)

“Maybe you want to find the index of the first occurence of a substring”
{% highlight clojure %}
(= 0 (.indexOf “hello world” __))
{% endhighlight%}

The 0 index will be “h”

“Or maybe the last index of the same”
{% highlight clojure %}
(= __ (.lastIndexOf “hello world, hello” “hello”))
{% endhighlight%}

13

“But when something doesn’t exist, it turns up negative”
{% highlight clojure %}
(= __ (.indexOf “hello world” “bob”))
{% endhighlight%}

-1

“Sometimes you don’t want whitespace cluttering the front and back”
{% highlight clojure %}
(= __ (string/trim “ \nhello world \t \n”))
{% endhighlight%}

“hello world”, Trim removes whitespace from both ends of string.

“You can check if something is a char”
{% highlight clojure %}
(= __ (char? \c))
{% endhighlight%}

true

“But it may not be”
{% highlight clojure %}
(= __ (char? “a”))
{% endhighlight%}

false, a char is not a string

“But chars aren’t strings”
{% highlight clojure %}
(= __ (string? \b))
{% endhighlight%}

false

“Strings are strings”
{% highlight clojure %}
(= true (string? __))
{% endhighlight%}

“string!”

“Some strings may be blank”
{% highlight clojure %}
(= __ (string/blank? “”))
{% endhighlight%}

true

“Even if at first glance they aren’t”
{% highlight clojure %}
(= __ (string/blank? “ \n \t “))
{% endhighlight%}

true

“However, most strings aren’t blank”
{% highlight clojure %}
(= __ (string/blank? “hello?\nare you out there?”))
{% endhighlight%}

false
It looks like that concludes our Strings Koan.
