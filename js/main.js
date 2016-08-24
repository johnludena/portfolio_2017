// Kickoff all Foundation JS 
$(document).foundation()

// Initializing WOW.js library
new WOW().init()

// Random fact generator (ABOUT ME SECTION)
var funFacts = ['Random fact about me #1', 'Random fact about me #2', 'Random fact about me #3', 'Random fact about me #4', 'Random fact about me #5']

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
	}, 2000)
}

// Event listener my gravatar image
gravatarImage.addEventListener('click', showRandomFact)