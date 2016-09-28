var greeting = 'Hello! Here is some advice for the day'
var date = new Date();
var time = date.getHours(); // starts at 1, goes to 24
var day = date.getDay(); //starts at 0 (Sunday), goes to 6 (Saturday)
var month = date.getMonth();
var timeMessage;
var dayMessage;
var monthMessage;
var seasonMessage;

if (time > 6 && time < 11) {
	timeMessage = 'Mornings are for coffee and meditation';
} else if (time >= 11 && time < 17) {
	timeMessage = 'A comerrrrr!';
} else if (time >= 17 || time < 6) {
	timeMessage = 'Mir mir';
}

// Seasons
if (month >= 2 && month <= 4) {

	// Spring
	if (time >= 17 || time < 6) {
		// Evening/night
		monthMessage = 'Enjoy the cool evening air';
	} else {
		monthMessage = 'Smell the roses!';
	}

} else if (month >= 5 && month <= 7) {
	// Summer
	
	if (time >=6 && time <=11) {
		monthMessage = 'I like turtles';
	} else if (time >=12 && time <=17) {
		monthMessage = 'Everything is awesome!';
	} else {
		monthMessage = 'Road trip!';
	}

} else if (month >= 8 && month <= 11) {

	// Fall
	if (time >= 11 && time < 17) {
		// Afternoon
		monthMessage = 'The leaves are turning';
	} else {
		monthMessage = 'Where is my sweater?';
	}

} else {
	// Winter
	if (time >=6 && time <=11) {
		monthMessage = "Dude where is my car?";
	} else {
		monthMessage = 'Brrrrrrrr!';
	}
}

if (day >=0 && day <= 4) {
	dayMessage = 'Work work work'; 
} else if (day === 5) {
	dayMessage = 'Almost there!';
}
  else {
  	dayMessage ='Party Time!';
}

if (month >=2 && month <=7) {
	seasonMessage = "Tequila";
} else {
	seasonMessage = "Greenvile is great!";
}

console.log(timeMessage);
console.log(dayMessage);
console.log(monthMessage);
console.log(seasonMessage);
