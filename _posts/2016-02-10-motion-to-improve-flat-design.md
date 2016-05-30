---
id: 166
title: How to Use Motion to Improve Flat Design
date: 2016-02-10T16:18:14+00:00
author: John Ludena
layout: post
guid: http://johnludena.com/?p=166
permalink: /motion-to-improve-flat-design/
categories:
  - Design
---
I recently came across a bold statement from the Foundation blog that read: “<a href="http://zurb.com/article/1340/foundation-for-apps-motion-ui-is-the-new-" target="_blank">Motion is the new flat.</a>”

And I have to be honest: I kinda agree.

In today’s oversaturated use of flat design, using subtle animations for key user actions could be the catalyst to increase your conversion rates – and consequently – your _business profits_ at the end of the day.

<!--more-->

## Is flat design really good for business?

You remember when the web was all gradients and overly-done drop shadows? It’s a little of a timeless joke that designers and developers will sometimes reminisce about when the subject of bad web design comes up. A few laughs will be shared and both parties will agree they are glad _that _phase of the web is over.

Unfortunately, I personally think we’ve gone a little too much to the opposite side of the spectrum with the flat design trend in recent years.

I was talking to a client the other day about an ecommerce project. “I hate flat design” he said. “I never know what to click on and websites look really dull and plain for me. I wish people would bring the old Web 2.0 look back. At least I knew back then what was a button and what wasn’t right away.”

At first I thought he was completely nuts. But then I put myself in his shoes. In the shoes of an everyday web user. Suddenly, it dawned on me: **Flat design may be hurting your business’ results at the end of the day.**

## Motion + Flat Design = Profit

So what _can_ you do? Flat design is not going anywhere – at least not for the time being. And for better or worse, keeping up with the latest web trends _does_ reflect that your company keeps up with the times, and you don’t run the risk of looking outdated or being perceived as a “dinosaur” within your industry.

**Smart use of motion** in your website is the answer.

Do me a favor: Open up a new tab and take a hard look at your current website. Then ask yourself this: What are the actions I want my users to take? Are they immediately noticeable? Could I improve them by adding a subtle animation effect? For example, these are just some of the steps you could take:

  * Using motion on the call-to-action buttons that ask your user to fill out a contact form.
  * Using motion on buttons that ask your user to submit their email address to a lead magnet (e.g. ebook, white paper, etc.) that will allow you to market to them at a later date through email.
  * Using motion on “Add to Cart” buttons (if you sell a primary product or service through your website)
  * Using motion to draw attention to a phone number for your user to get in touch with you

I repeat, the trick is to be _subtle_ here. You don’t want to look like your entire website is a spammy-looking sidebar ad. Also, make sure your animation effects go well with the theme and “feel” of your company or brand. For example, a personal blog could get away with a more crazy or fun animation (such as stretching or rotation of a button) – when these might not be the best choice for a corporation or more serious institute. However, that doesn’t mean a subtle “fade” or “bounce in” effect cannot be used instead.

Here is a simple example of what I&#8217;m talking about. How about a “heart beat” button that draws your attention without being obnoxiously distracting? Easily done with a little CSS3 magic using **@keyframes** (hat tip to <a href="http://samuelmichaud.fr/2013/web-design/add-a-delay-between-repeated-css3-animations/" target="_blank">Samuel Michaud</a> for this one!):

&nbsp;

<a class="button wow shake heartbeat">Look at me!</a>

&nbsp;

And here&#8217;s the code to make that happen:

<pre class="lang:default decode:true ">.button.heartbeat {
	-webkit-animation: keepgoing 5s infinite; /* Chrome, Safari, Opera */ 
    animation: keepgoing 5s infinite;
}

@keyframes keepgoing {
	0% {transform: scale(1);}
	12.5% {transform: scale(1.1);}
	25% {transform: scale(1);}
	100% {transform: scale(1);}
}</pre>

&nbsp;

## Conclusion

Attention spans are getting shorter by the year and flat design is not helping the cause. That’s why it’s so critical for website owners to work closely with their designers & developers to start implementing smart animations on important website elements. This will draw a user’s attention and give you the best chances to gain a new customer or sales lead.

After all, if your website is getting traffic but no conversions, it might be a red flag that you need a serious make-over. Even if you feel like the new “flat-look” of your website looks amazing and could win a design award.