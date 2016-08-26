// Kickoff all Foundation JS 
$(document).foundation()

// Initializing WOW.js library
new WOW().init()

// Random fact generator (ABOUT ME SECTION)
var funFacts = ['I grew up in Arequipa, Peru (and lived there for 15 years).', 'I\'m a really good Karaoke singer (but only after 10 beers).', 'I have a motorcycle, but only ride it in the winter because Houston is too damn hot.', 'I graduated with a BFA (Bachelor of Fine Arts) from the University of Houston at Clear Lake.', 'My dream vacation would be a cruise to Alaska to get close and personal with some glaciers.','The city in Europe I want to visit the most is Amsterdam.','I\'m a sucker for good UI.','I\'ll take beer over wine all day, every day.','I have a bit of an entrepreneurial side and love starting tiny web projects on my free time.','I want to write & publish a book before 2020.','I\m a total pool shark and will take your lunch money if we play a game.','Ping pong is the answer to any coding problem road-block.','I am not a huge fan of social media.','I\'m lactose intolerant, so hold the milk please.','My Mom is from Mexico, and my Dad is from Peru.']

//  Nodes required for this black magic to happen
var gravatarImage = document.querySelector('.gravatar')
var factContainer = document.querySelector('.fact-bubble')

// Global variables for showRandomFact function
var lastRandom = null
var bubbleTimer = null

// Function to run upon clicking of my head
var showRandomFact = function(e){
	console.log('You click on my head didn\'t you? Good for you.')

	// If running timeout, clear it first before running another random fact
	if (bubbleTimer !== null) {
		clearTimeout(bubbleTimer)
		console.log('TIMER CLEARED')
	}

	// Get random member of facts array
	var randomNum = Math.floor(Math.random() * funFacts.length)

	// If randomNum is equal to the last shown random fact, re-set randomNum
	while (randomNum === lastRandom) {
		randomNum = Math.floor(Math.random() * funFacts.length)
	}

	// Make lastRandom variable the actual last random number before displaying it
	lastRandom = randomNum

	// Set random array fact as content and remove hidden class
	factContainer.textContent = funFacts[lastRandom]
	factContainer.classList.remove('hidden')


	// Remove random fact after a few seconds
	bubbleTimer = setTimeout(function(){
		console.log('time to go bye bye...')
		factContainer.classList.add('hidden')
	}, 4000)
}

// Event listener my gravatar image
gravatarImage.addEventListener('click', showRandomFact)