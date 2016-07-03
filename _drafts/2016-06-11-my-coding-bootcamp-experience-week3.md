---
layout: post
title: My Coding Bootcamp Experience&#58; Week 3 in Review
permalink: /my-coding-bootcamp-experience-3/
---


Week 3 at [The Iron Yard](http://www.theironyard.com) is in the books and I'm here again reporting on this week's experience. If you've ever wondered what a usual week looks like at The Iron Yard coding bootcamp, here's what you can expect:

* **Monday:** You get to class, fresh from the weekend and ready to learn. Your instructor hits you with a new concept. For example, this week's topics was the introduction of the DOM and how to use everything we've learned about Javascript so far in order to make manipulations to it. You practice this in class and then work on a new assignment due the next day. This is how the entire bootcamp works. Lectures in the morning, labs in the evening working on your homework.

* **Tuesday:** You return, battle-wounded after struggling the day before to complete some of the more complicated tasks assigned in the homework. At this point, I'm usually still trying to wrap my mind around the new concept introduced on Monday, but we keep moving. Our instructor keeps stacking smaller pieces on this new big concept we learned the previous day. Another assignment is due on Wednesday.

* **Wednesday:** After practicing on exercises both Monday and Tuesday, you finally start getting comfortable and things start "clicking". You start feeling confident in your big weekend assignment that you will learn about on Thursday, which is the only type of assignment that is not due the day after. One last daily assignment is due on Thursday.

* **Thursday:** The hammer gets dropped and you are presented with what you will be tackling over the next three days. This will be due on Monday morning, so there's no time to waste. Your instructor will provide you with some basic strategies to tackle the major problems in this project, so you have a rough blueprint of how to start putting it all together.

* **Friday:** There's a speaker every Friday morning at The Iron Yard that gives a one hour presentation on a certain topic. This is a great time to learn from real professionals in the field that come from several different backgrounds (like web development, hardware, business, etc). In the afternoon, we all work in our weekend assignments and have a few "Iron Pints" (aka beers).

* **Saturday & Sunday:** You keep working on your weekend project until it's done. Teacher assistants are available on  weekends as well, so if you are completely stuck on a certain part of your project, there's always help available for those that want it.

That's pretty much how things go from week-to-week at The Iron Yard. Time is moving incredibly fast, but I'm enjoying every single minute of it. I wouldn't be surprised at all when Week 12 seems to just magically appear after I blink a few more times.

Here's the short breakdown of everything we covered this week in class...

## The Iron Yard: Week 3 in Review

This week was an exciting one. We finally moved away from using Javascript on the  console and using it on real HTML pages. We got to learn about the DOM, and how Javascript can change this painting that your browser renders – creating everyday interactions like removing elements from the page, adding them somewhere else, changing their CSS styles, etc. 

### Objects

Objects is one of those concepts that you first struggle to understand. At least I did. In the beginning, Javascript elements was simple. It was just a matter of numbers, strings, and arrays that could contain both.

Objects adds a multi-layered complexity to this concept. Even though an object is nothing more than a combination of key/value pairs, when you have an array of objects, and objects INSIDE objects – things start to get hairy. 

### The DOM

I never fully understood what the hell the DOM was until Justin – our front-end instructor – explained it to us this week. The DOM (Document Object Model) is a very complex _object_ (but still, a Javascript object nevertheless) that gets built based on your HTML tree structure. This giant object allows you the ability to access all "nodes" (or HTML elements) of your pages's structure tree, and then modifying them to your heart's content through Javascript. This is the base of how all user interactions are built with Javascript.

So for example, if I want to remove a <code>div</code> after a user cliks on a button, I'd first create a node of this <code>div</code> in order to manipulate it; which is only possible because of the DOM created by your browser. 

This can be definitely be a bit of an abstract concept to understand unless you first understand the basics of Javascript programming.

### Event Listeners

Event listeners are easy once you understand objects and the DOM. To put it simply, event listeners are special functions (also called "methods") that all browsers use to detect an action by a user. For example: a click, a mouse hover, pressing your Enter key. These are all considered "events". And as events, we can detect the precise moment they happen so we can make modifications to our painted HTML picture (make other elements appear, dissapear, display a message, apply or remove CSS classes, etc.)

### Weekend Assignment

This week's assignment is to build a clock that displays a HEX color based the current time when a user hovers over it. This color will also be reflected in the background of the page. In other words, the background's color will keep changing as time keeps on ticking.

**Check out my project submission on GitHub:** [johnludena.github.io/colorclock](http://johnludena.github.io/colorclock)

## Conclusion

Phew! This turned into a bit of a longer write-up that intended. But it doesn't matter, because I think it's important that I explained in detail not just this week's events, but what you can expect on a weekly basis when attending The Iron Yard.

I've never been more excited to build new things for the web, and I can hardly wait to see what Week 4 has for us.