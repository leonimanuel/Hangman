
let myArray = [
	"banana", 
	"envelope", 
	"piano", 
	"bandersnatch", 
	"ПОБЕДА"
	]

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


let collectionState = wordList
let q = 0


function loadNewGame (collection) {
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
let goodGuess = false

let bodyParts = [
	"torso", 
	"left-arm", 
	"right-arm", 
	"left-leg", 
	"right-leg", 
	]

function changeCollectionState(collection) {
	collectionState = collection
}

function checkGuess() {
	console.log("OUTPUT: " + eachWordArray);
	console.log("guess: " + input.value)
	goodGuess = false
	
	let j = 0;
	let z = 0
	eachWordArray.forEach(checkIfRight) //there's gotta be a more to-the-point way of doing this.
	
	function checkIfRight () {
		for (let i = 0; i < eachWordArray[j].length; i++) {
			if (input.value === eachWordArray[j][i]) {
				NumLetterDiv = document.getElementById("letterBox" + z);
				NumLetterDiv.setAttribute("class", "letterBox black");
				// $("NumLetterDiv").css("color", "red");
				console.log(NumLetterDiv);
				console.log("NICE")
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
}

function showCollections (input) {

}

function changeColor () {
	$("#collections-title").addClass("change-collections-title-color");
}

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