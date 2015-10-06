---
layout: post
title:  "Javascript's <em>this</em> keyword"
date:   2015-10-6 13:12:21
categories: javascript fundamentals
---

Javascript's :sparkles:*this*:sparkles: object could very well be one of the most miss understood concept in the language. 

The first think that we need to understand is that when all function is Javascript execute, it gets a *this* property. The 
value of this is determined by the value of the object that invoked that function where *this* is used. The *this* reference
will always hold the value of a single object! The tricky part about the *this* reference is that it is not refering to the 
object where it is defined. It's value is solely based on the object that invokes the *this* function.

There are 4 rules that need to be memorized when you think about *this*. These are the rules: 
<ol>
    <li>
        Default binding, If 'strict mode isn't being used, <em>this</em> gets bound to the global object. 
        {% highlight javascript %} var bar = foo(); {% endhighlight %}
    </li>
    <li>
        Implicit binding, if the function is bound to an object, <em>this</em> gets the context of that object. 
        {% highlight javascript %} var bar = obj.foo(); {%endhighlight%}
    </li>
    <li>
        Explicit binding, <em>this</em> is explicitly specified to an object. 
        {% highlight javascript %} 
        var bar = foo.call(obj);
// or 
var bar = foo.bind(obj);
        {%endhighlight%}
    </li>
    <li>
        New binding, <em>this</em> is the newly constructed object. 
        {% highlight javascript %} var bar = new foo(); {%endhighlight%}
    </li>
    <li>
        Always 'use strict' mode. Polluting the global namespace is a bad idea. 'use strict' prevents <em>this</em> from referring
        to the global context and throws an error.
    </li>
</ol>



Here's a common example of how *this* can be confused:

{% highlight javascript %}
function foo() {
    console.log( this.a );
}

function doFoo(fn) { 
    fn();
}

var obj = { 
    a:2, foo:foo
 }

var a = "oops, global";
doFoo(obj.foo);

// Whats doFoo(obj.foo) return?
{% endhighlight %}

Although it looks like the console will log 2, this is not the case, it outputs "oops, global". Since doFoo() is in the global context, *this* is refering
 to the global var a, not obj.foo()'s context. Crazy huh!? It makes my head hurt too.
 
 *This* can be a powerful too to pass around context but these rules need to be taken into account!
 
 As always, here the MDN documentation on [*this*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this).