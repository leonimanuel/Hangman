let allTopics = {
	geography: {
		"State Capitals": [
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
			], 
		"State Mottos": [
			"the people rule", 
			"let it be perpetual", 
			"by valor and arms", 
			],
		"European Countries": 
			["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North", "Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United", "Kingdom"]
	},  
	animals: {
		birds: {
			nightingale: {
				hint1: "kinda like kightingale",
				name: "nightingale"
			}, 
			robin: {
				hint1: "kinda like bobin",
				name: "robin" 
			}, 
			bluejay: {
				hint1: "kinda like gluejay",
				name: "bluejay"
			}, 
		}, 
		fish: [
			"salmon", 
			"trout", 
			"tuna", 
			]
	}
	,
	music: {
		"Famous Composers": ["Bach", "Mozart", "Beethoven", "Tchaikovsky", "Wagner", "Schubert", "Verdi", "Handel", "Haydn", "Vivaldi", "Stravinsky", "Chopin", "Mendelssohn", "Debussy", "Liszt", "Rachmaninov", "Dvorak", "Mahler"]
	}
}

let birdsKeys = Object.keys(allTopics.animals.birds)
console.log(birdsKeys)
// console.log(allTopics.animals.birds[birdsKeys[1]].word)


// famousComposers = "Bach  Mozart  Beethoven  Tchaikovsky  Wagner  Schubert  Verdi  Handel  Haydn  Vivaldi  Stravinsky  Chopin  Mendelssohn  Debussy  Liszt  Rachmaninov  Dvorak  Mahler"
// fcArray = famousComposers.split("  ")
//  console.log(fcArray)

// euroCountries = "Albania Andorra Armenia Austria Azerbaijan Belarus Belgium Bosnia and Herzegovina Bulgaria Croatia Cyprus Czechia Denmark Estonia Finland France Georgia Germany Greece Hungary Iceland Ireland Italy Kazakhstan Kosovo Latvia Liechtenstein Lithuania Luxembourg Malta Moldova Monaco Montenegro Netherlands North Macedonia Norway Poland Portugal Romania Russia San Marino Serbia Slovakia Slovenia Spain Sweden Switzerland Turkey Ukraine United Kingdom"
// euroCountriesArray = euroCountries.split(" ");
// console.log(euroCountriesArray)


// let myArray = [
// 	"banana", 
// 	"envelope", 
// 	"piano", 
// 	"bandersnatch", 
// 	"ПОБЕДА"
// 	]

// let geography = [
// 	"stateCapitals", 
// 	"stateMottos"]

// let stateCapitals = [
// 	"Montgomery", 
// 	"Juneau", 
// 	"Pheonix", 
// 	"Sacramento", 
// 	"Denver", 
// 	"Tallahassee", 
// 	"Atlanta", 
// 	"Springfield", 
// 	"Honolulu", 
// 	"Topeka", 
// 	];


// let stateMottos = [
// 	"the people rule", 
// 	"let it be perpetual", 
// 	"by valor and arms", 
// 	]

// let animals = [
// 	"birds", 
// 	"fish"
// 	]

// let birds = [
// 	"nightnigale", 
// 	"robin", 
// 	"bluejay"]

// let fish = [
// 	"salmon", 
// 	"trout", 
// 	"tuna", ]

