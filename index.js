

// let topicArray = Object.keys(allTopics)
// let randomizedTopic = topicArray[Math.floor(Math.random()*topicArray.length)]

// let collectionArray = Object.keys(allTopics[randomizedTopic])
// let randomizedCollection = collectionArray[Math.floor(Math.random()*collectionArray.length)]

// let randomizedPhrase = allTopics[randomizedTopic][randomizedCollection]
// 	[Math.floor(Math.random()*allTopics[randomizedTopic][randomizedCollection].length)]

// let random = randomizedPhrase
// console.log(random[Math.floor(Math.random()*random.length)])

const topicArray = Object.keys(allTopics)
// console.log(topicArray)

let collectionState = wordList
let q = 0

// function changeCollectionState(collection) {
// 	collectionState = collection
// }

let lettersLeft = 0
let currentTopic

hangmanGridColumn = 15
hangmanGridRow = 6
function loadNewGame (collection) {
	// console.log(currentTopic)
	// console.log(collection)

	lettersLeft = 0
	badGuesses = 0
	collectionState = collection
	// console.log(collectionState)

	let randomPhrase
	
	//IF YOU CLICKED RANDOM
	if (collectionState === allTopics) {
		let randomizedTopic = topicArray[Math.floor(Math.random()*topicArray.length)]

		let collectionArray = Object.keys(allTopics[randomizedTopic])
		let randomizedCollection = collectionArray[Math.floor(Math.random()*collectionArray.length)]

		let randomizedPhrase = allTopics[randomizedTopic][randomizedCollection]
			[Math.floor(Math.random()*allTopics[randomizedTopic][randomizedCollection].length)]
			// console.log(randomizedPhrase)
		randomPhrase = randomizedPhrase
	} else {
		// console.log(currentTopic)
		randomPhrase = allTopics[currentTopic][collectionState]
		[Math.floor(Math.random()*allTopics[currentTopic][collectionState].length)];
	}
	// console.log("collectionState: " + collectionState)
	// console.log("stateCapitals: " + stateCapitals)
	// console.log("randomPhrase: " + randomPhrase)


	eachWordArray = randomPhrase.split(' ');
	// console.log("eachWordArray: " + eachWordArray)
	// console.log("eachWordArray length: " + eachWordArray.length)


	let eachLetterArray = [];
	
	for (let i = 0; i < eachWordArray.length; i++) {
		eachLetterArray[i] = eachWordArray[i].split('');

	}

	// console.log(eachLetterArray)
	// console.log(collectionState)
	// console.log(output)
	// currentCollectionDiv = document.getElementById(" ")

	if (q !== 0) {
		$(".wordBox").remove();
		$(".letterBox").remove();
		$(".guessBox").remove();
		$(".prisoner-body").remove();
		// let previousGame = document.querySelectorAll(".letterBox")
		// console.log(previousGame);
		// while(previousGame.length > 0){
  //      previousGame[0].parentNode.removeChild(previousGame[0]);
  //   	}
	}

	q++;
	// console.log(q);

	let j = 0
	let z = 0
	eachWordArray.forEach(createLetterBox)
	
	function createLetterBox () {
		wordDiv = document.createElement("div");
		wordDiv.setAttribute("class", "wordBox")
		var currentDiv = document.getElementById("GuessWrapper"); 
		document.body.insertBefore(wordDiv, currentDiv); 

		let i = 0;
		while (i < eachWordArray[j].length) {
			// create a new div element 
			letterDiv = document.createElement("div");
			
			letterDiv.setAttribute("class", "letterBox lost-letter")
			letterDiv.setAttribute("id", "letterBox" + z)
			// and give it some content 
			boxLetter = document.createTextNode(eachWordArray[j][i]);
			// add the text node to the newly created div
			letterDiv.appendChild(boxLetter);  

			// add the newly created element and its content into the DOM 
			wordDiv.appendChild(letterDiv);

			// var currentDiv2 = document.getElementById("GuessWrapper"); 
			// document.body.wordDiv.insertBefore(letterDiv, currentDiv2); 
			i++;
			z++;
			lettersLeft++;
		} 
		// console.log("letters left: " + lettersLeft)
		j++;
	}
	console.log("phrase: " + randomPhrase)
}	


// loadNewGame ();


// let input = document.body;
let input = document.getElementById("GuessInput")
// console.log(output)

let badGuesses = 0
let goodGuess = false //Is this necessary at all?

let bodyParts = [
	"torso", 
	"left-arm", 
	"right-arm", 
	"left-leg", 
	"right-leg", 
	]


let guesses = 0
let guessedLetters = []
let repeatAlert = false
function checkGuess() {
	if (input.value === '') {
		return alert("You have to try a letter!")
	} 

	if (guesses !== 0) {
		for (let i = 0; i < guesses; i++) {
			console.log("guessed letters: " + guessedLetters)
			if (input.value === guessedLetters[i]) {
				alert("You already guessed that!")
				//IN GAME ALERT:
				// if (repeatAlert === false) {
				// 	repeatLetterAlertBox = document.createElement("div")
				// 	repeatLetterAlertBox.setAttribute("id", "repeat-letter-alert")

				// 	repeatLetterAlertText = document.createTextNode("You already guessed that!")
				// 	repeatLetterAlertBox.appendChild(repeatLetterAlertText);
					
				// 	putBeforeDiv = document.getElementById("putBefore");
				// 	guessContainer.insertBefore(repeatLetterAlertBox, putBeforeDiv);
				// 	repeatAlert = true;
				// }
					
				input.value='';
				return;
			}
		}
	}

	//IN GAME REPEAT ALERT, removes if guess is not repeat.
	// if (repeatAlert === true) {
	// 	$(repeatLetterAlertBox).remove();
	// 	repeatAlert = false;
	// }

	goodGuess = false
	
	guessedLetters.push(input.value)

	let j = 0;
	let z = 0
	eachWordArray.forEach(checkIfRight) //there's gotta be a more to-the-point way of doing this.
	function checkIfRight () {
		for (let i = 0; i < eachWordArray[j].length; i++) {
			if (input.value === eachWordArray[j][i]) {
				NumLetterDiv = document.getElementById("letterBox" + z);
				NumLetterDiv.setAttribute("class", "letterBox black");
				// $("NumLetterDiv").css("color", "red");
				// console.log(NumLetterDiv);
				// console.log("NICE")
				goodGuess = true //fix this idiot
				--lettersLeft
				console.log("letters left: " + lettersLeft)

			}
			z++;
		}
		j++;

	}

	if (goodGuess === true) {
		guessBox = document.createElement("div")
		guessBox.setAttribute("class", "guessBox goodguess")	
		guessLetter = document.createTextNode(input.value);

		guessBox.appendChild(guessLetter);

		guessContainer = document.getElementById("guessed-letter-container"); 
		putBeforeDiv = document.getElementById("putBefore"); 
		guessContainer.insertBefore(guessBox, putBeforeDiv); 
	}

	if (goodGuess === false) {
		// $("#hangman-picture").css({'grid-column' : '14', 'grid-row' : '5'});
		$("#hangman-picture").css({'grid-column' : (hangmanGridColumn-- - 1), 
			'grid-row' : (hangmanGridRow-- - 1)});

		badGuesses++;
		console.log("BAD GUESSES: " + badGuesses);

		guessBox = document.createElement("div")
		guessBox.setAttribute("class", "guessBox badguess")	
		guessLetter = document.createTextNode(input.value);
		guessBox.appendChild(guessLetter);

		guessContainer = document.getElementById("guessed-letter-container"); 
		var currentDiv2 = document.getElementById("putBefore"); 
		guessContainer.insertBefore(guessBox, currentDiv2); 

		if (badGuesses >= 5) {
			// youLose = document.getElementById("lose")
			// youLose.setAttribute("class", "lose")

			$(".lost-letter").addClass("show-lost-letter");
			// lostLetter = document.getElementsByClassName("lost-letter")
			// console.log(lostLetter);
			// lostLetter.setAttribute("class", "letterBox show-lost-letter")

		}	
	}

	if (lettersLeft === 0) {
			$(".letterBox").attr("style", "color: green")
			console.log("YOU WON!!")
		}	

	input.value='';
	guesses++
}

let collectionDisplay = false
let hasRunOnce  = false
function showCollections (event, topic) {
	// topic = `${topic}`
	console.log("topic: " + topic)
	for (let i = 0; i < topicArray.length; i++) {
		// console.log(topicArray[i])
		if (topic === topicArray[i]) {
			topic = topicArray[i]
			currentTopic = topic
			// console.log("topic = topicArray!![i]")
			break;
		} 
		// else {
		// 	return alert("something went wrong!")
		// }
	}

	collectionArray = Object.keys(allTopics[topic])
	// console.log("collectionArray length: " + collectionArray.length)
	if (collectionDisplay === true && topic === currentTopic) {
		$(allCollectionsDiv).remove();
		collectionDisplay = false
		return;
	} else if (topic !== currentTopic && hasRunOnce === true) {
		$(allCollectionsDiv).remove();
	}

	
	currentTopic = topic;
	allCollectionsDiv = document.createElement("div")
	allCollectionsDiv.setAttribute("id", "collectionsBox")
	topicContainer = document.getElementById("collection-topic-box")
	$(allCollectionsDiv).insertAfter(topicContainer);
	
	for (let i = 0; i < collectionArray.length; i++) {
		// console.log(i);
		// console.log("collectionArray[i]: " + collectionArray[i]);
		
		topicCollectionDiv = document.createElement("div");
		topicCollectionText = document.createTextNode(`${collectionArray[i]}`);
		topicCollectionDiv.appendChild(topicCollectionText);
		
		topicCollectionDiv.setAttribute("class", `collections ${event.target.id}-collection`);
		topicCollectionDiv.setAttribute("id", `${collectionArray[i]}-id`)
		topicCollectionDiv.setAttribute("onclick", `loadNewGame('${collectionArray[i]}')`)


		topicDiv = document.getElementById(`${event.target.id}`);
		(allCollectionsDiv).appendChild(topicCollectionDiv);

		collectionDisplay = true;
		hasRunOnce = true;
	}
	// console.log("topic: " + topic)
}

// currentTopic = topic;

