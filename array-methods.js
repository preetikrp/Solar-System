console.log("Hello solar system");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/



var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

planets.forEach(function (){
})
	document.getElementById("planets").innerHTML = `${planets}`




// Use the map method to create a new array where the first letter of each planet is capitalized


var el = document.getElementById("planets1");
var newarray = planets.map(function(value){
         return value.charAt(0).toUpperCase()+value.slice(1);
});

document.getElementById("planets1").innerHTML = newarray;


// Use the filter method to create a new array that contains planets with the letter 'e'



   newarray1 = planets.filter(function(value,index){
   			return value.includes("e");

   });

document.getElementById("planets2").innerHTML = newarray1;



// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(value1,value2){
	return value1+ " " + value2;
});

document.getElementById("words").innerHTML = sentence;