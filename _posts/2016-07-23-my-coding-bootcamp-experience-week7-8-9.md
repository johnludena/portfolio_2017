---
layout: post
title: My Coding Bootcamp Experience&#58; Week 7, 8, and 9 in Review
permalink: /my-coding-bootcamp-experience-7-8-9/
---

Another 3 weeks just flew by and my summer coding bootcamp at The Iron Yard is almost coming to a close.

Starting next Monday, we will begin a final 3-week sprint to the finish where we will use everything we've learned up to this point to build a MVP (Minimum Viable Product) of our very own. Yes, **I'll be building my first real world app that will _hopefully_ solve a very real problem.**

I'm honestly so freakin' excited about it that I can hardly wait for Monday morning to get here already!

Until then, let me share with you all the things we've covered in the past 3 weeks at TIY...

## Week 7: Expanding on React and introducing Flux
React is still our go-to tool for creating all our views in the MVC pattern, coupled with Backbone for our controller and models (i.e. our data).

However, week 7 brought one more core concept that is very popular among React developers. The concept of using a **"Flux" architecture** in your app.

What in the name of all that is holy is Flux?

It all started when the team at Facebook discovered that the MVC architecture could get incredibly complicated as their app grew and more features were added to the Facebook platform. The main problem was that MVC's nature of different components talking to – and RESPONDING to each other – started becoming completely unmanageable. Adding new features would create bugs in existing features (like the Messaging app), and even when these were fixed, they would end up coming back every time a brand-new feature was implemented.

Something had to change.

So the engineering team at the big blue decided to change from an MVC pattern, to what they christened a "Flux" pattern, where Model-View-Controller is replaced by **Actions-Store-View.** All in a one-way flow (aka _uni-directional data flow_). No more components talking back to each other and creating webs of logic impossible to untangle for new hires (or anyone else for that matter).

Now, don't freak out on me. This all may sound like overkill (and it honestly might be for small web projects), but a React Flux pattern can be quite elegant, and it only involves a few changes:

* We use an **ACTIONS.js** file to handle all our functions and keep logic out of our views. These gives us lean and mean views without the bloat.
* We now use a **STORE.js** file to store all our data (models and collections). This allows us to import this file for any of our views with minimal code.
* We still very much use a controller to handle all our **VIEWS** via Backbone. Nothing has really changed here.

I'm still getting used to the Flux pattern, but I can definitely see how it can make life much easier for a team who uses React to power a growing web app.


## Week 8: We become full-stack developers

OK, not really. However, I really love that The Iron Yard uses the last two weeks to introduce their students to the other side of the coin (back-end students learn a bit of Javascript, and front-end students learn a bit about back-end and servers).

For us "fronties," week 8 introduced us to **Node.js, Express.js, and MongoDB** – some of the most popular backend tools today that full-stack web developers use.

Node.js is what powers our backend server environment. Yes, our backend is also powered by Javascript! How amazing is that? There really isn't anything that Javascript can't do nowadays...

Express.js is used to create our different routes (or endpoints) for our backend. That means that we can now not only read from third party APIs, but also write and **create our very own APIs** to write to our database! 

And yes, you guessed it: MongoDB is what now allows us to create "persistent data" and keep any type of information stored in a server.

## Week 9: Baby got backend...

Week 9 was used as additional practice working with our new back-end stack and getting more comfortable with our new client-server relationship.

Obviously, I can't call myself a full-stack developer after 2 short weeks, but I'm really glad I got introduced to these concepts before the end of the course. This is something which I will be expanding into much more in the future for sure.

## The Iron Yard: Week 7, 8, 9 in Review

We definitely felt challenged these past 3 weeks as we got introduced to back-end technologies – most of which are completely new to me – as well as getting used to a "Fluxian" architecture in React. Especially just when we were getting comfortable with MVC.

But that's what a good bootcamp is SUPPOSED to do. You are NOT supposed to feel comfortable. You are supposed to be constantly challenged with new concepts and technologies and always feel _just_ out of your previous comfort-zone.

This past week, we also got a chance to drop by Poetic, a digital agency in Houston, to meet other web designers and developers out on the trenches. And of course, our fearless Campus Director, Brian Dorton, showed off his legendary BBQ skills for all of us in celebration of how far we've come in such a short period of time.

I can't believe it's almost over. Part of me knew this summer would go by in a blink, but I honestly never expected it to be _this_ fast. Nor to have so much fun learning object oriented programming and starting to think like an engineer.

## Conclusion

Tomorrow we'll be starting final projects, which will be demo'ed first to friends and family, followed by a special day for potential employers to stop by and check out our apps.

I'm very much ready to finally put everything I've learned to the test and see what the idea I have right now could lead to in the future.

See you then.

