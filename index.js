
let myArray = [
	"banana", 
	"envelope", 
	"piano", 
	"bandersnatch", 
	"ПОБЕДА"
	]

let geography = [
	"stateCapitals", 
	"stateMottos"]

let stateCapitals = [
	"Montgomery", 
	"Juneau", 
	"Pheonix", 
	"Sacramento", 
	"Denver", 
	"Tallahassee", 
	"Atlanta", 
	"Springfield", 
	"Honolulu", 
	"Topeka", 
	];


let stateMottos = [
	"the people rule", 
	"let it be perpetual", 
	"by valor and arms", 
	]

let animals = [
	"birds", 
	"fish"
	]

let birds = [
	"nightnigale", 
	"robin", 
	"bluejay"]

let fish = [
	"salmon", 
	"trout", 
	"tuna", ]

let collectionState = wordList
let q = 0

function changeCollectionState(collection) {
	collectionState = collection
}


function loadNewGame (collection) {
	badGuesses = 0
	collectionState = collection
	// collectionState = stateMottos
	let randomPhrase = collectionState[Math.floor(Math.random()*collection.length)];

	eachWordArray = randomPhrase.split(' ');
	// console.log(eachWordArray)

	let eachLetterArray = [];
	
	for (let i = 0; i < eachWordArray.length; i++) {
		eachLetterArray[i] = eachWordArray[i].split('');

	}
	console.log(eachLetterArray)
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
	console.log(q);

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
		} 
		j++;
	}
	
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
function checkGuess() {
	console.log("number of guesses: " + guesses)
	if (guesses !== 0) {
		for (let i = 0; i < guesses; i++) {
			console.log("guessed letters: " + guessedLetters)
			if (input.value === guessedLetters[i]) {
				console.log("You already guessed that!")
				input.value='';
				return;
			}
		}
	}

	// console.log("OUTPUT: " + eachWordArray);
	// console.log("guess: " + input.value)
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
		var currentDiv2 = document.getElementById("putBefore"); 
		guessContainer.insertBefore(guessBox, currentDiv2); 
	}

	if (goodGuess === false) {
		prisonerPart = document.createElement("div");
		prisonerPart.setAttribute("class", "prisoner-body")
		prisonerPart.setAttribute("id", bodyParts[badGuesses])
		document.getElementById("prisonerDiv").appendChild(prisonerPart)

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
	input.value='';
	guesses++
}




function changeColor () {
	$("#collections-title").addClass("change-collections-title-color");
}


let collectionDisplay = false
let currentTopic
let hasRunOnce  = false
function showCollections (event, topic) {
	

	console.log(topic)
	console.log(currentTopic)
	if (collectionDisplay === true && topic === currentTopic) {
		$(allCollectionsDiv).remove();
		collectionDisplay = false
		return;
	} else if (topic !== currentTopic && hasRunOnce === true) {
		$(allCollectionsDiv).remove();
	}
		


	
	
	// if (currentTopic === topic)
	// 	return;
	// console.log(topic); //["stateCapitals", "stateMottos"]
	// console.log(topic[0]); //stateCapitals
	// console.log(topic[1]); //stateMottos
	// console.log(topic.length); //2
	// console.log(event.target.id); //geography-topic
	
	currentTopic = topic;
	allCollectionsDiv = document.createElement("div")
	allCollectionsDiv.setAttribute("id", "collectionsBox")
	topicContainer = document.getElementById("collection-topic-box")
	$(allCollectionsDiv).insertAfter(topicContainer);
	
	for (let i = 0; i < topic.length; i++) {
		topicCollectionDiv = document.createElement("div");
		topicCollectionText = document.createTextNode(`${topic[i]}`);
		topicCollectionDiv.appendChild(topicCollectionText);
		
		topicCollectionDiv.setAttribute("class", `collections ${event.target.id}-collection`);
		topicCollectionDiv.setAttribute("id", `${topic[i]}`)
		topicCollectionDiv.setAttribute("onclick", `loadNewGame(${topic[i]})`)


		topicDiv = document.getElementById(`${event.target.id}`);
		(allCollectionsDiv).appendChild(topicCollectionDiv);

		collectionDisplay = true;
		hasRunOnce = true;
		// $(topicCollectionDiv).insertAfter(topicContainer);
		
		//now I'm trying to link the new text div to an onlick which
		// topicDiv.appendChild(topicCollectionDiv);


		// $(`#${event.target.id}`).append(`<div>${topic[i]}</div>`);
		// $(`<div>${topic[i]}</div>`).attr("class", `RED`);
		
		// ${topic}-colletion
	}
}

	// for (let i = 0; i < topic.length; i++) {
		
	// 	topic[i] = document.createElement("div");
	// 	topic = event.target.id
	// 	// console.log(topic)
	// 	// topic.appendChild(topic[i]);
	// }

	//Basically, when you click on Geography, it creates the collections.
	// stateCapitals = document.createElement("div");
	// stateCapitalsText = document.createTextNode("stateCapitals");
	// stateCapitals.appendChild(stateCapitalsText);
	// geographyTopic = document.getElementById("geography-topic");
	// geographyTopic.appendChild(cityScape);
	// $(stateCapitals).attr({"class": "geography-collection", "id": "state-capitals"});
	// $("#geography-topic").append(stateCapitals)
	
	// $("#geography-topic").append("<div>State Mottos</div>").attr({"class": "geography-collection", "id": "state-mottos"});



// onSubmitRegister = () => {
// 	let name = (document.getElementById("namefield").value);
// 	let email = (document.getElementById("emailfield").value);

// 	fetch("http://localhost:3000/register", {
// 		method: 'post',
// 		headers: {"Content-Type": "application/json"},
// 		body: JSON.stringify({
// 			name: name,
// 			email: email,
			
// 		})
// 	}) //by default, fetch does GET.
// 		.then(response => response.json())
// 		// .then(user => {
// 		// 	if (user.id) { //to make sure that user has an id
// 		// 		console.log(user)
// 		// 		this.props.loadUser(user) //loading the user
// 		// 		this.props.onRouteChange('home'); //changing the route
// 		// 	}
// 		// })
// }


// console.log(red);




// document.body.onload = createNewGame;


// function createNewGame () {
// 	// for (let i = 0; i < output.length; i++)
// 	var letterBox = document.createElement('div');
// 	var boxLetter = document.createTextNode("Red")
// 	// entry.appendChild(document.createTextNode("Hi"));
// }

// var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(letterBox, currentDiv)


// createNewGame();







// var list = document.getElementById('demo');

// function changeText2() {
//     var firstname = document.getElementById('firstname').value;
//     document.getElementById('boldStuff2').innerHTML = firstname;
//     var entry = document.createElement('li');
//     entry.appendChild(document.createTextNode(firstname));
//     list.appendChild(entry);
// }