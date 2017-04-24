$(document).foundation()

console.log("All good");
var copyList = document.getElementsByClassName("copy");
var textList = document.getElementsByTagName("textarea");


// The Tale of the Most Annoying Javascript
//     - Once upon a time there existed a very confusing language to code in, the bane of sleep deprived SoftDev students
//     - It did not allow for looping through arrays of lists of elements and applying event listeners
//     - So one day a poor SoftDev2 student had to troll the depths of the StackOverflow to understand this strange language
//     - Here is the code he found to work and how it works:

//     -      The code creates a function "addListeners" which does not add an event listener to an element, but

//     -      ***IT RETURNS A FUNCTION THAT ADDS AN EVENT LISTENER TO A SPECIFIC ELEMENT***

//     -      A list called callList is populated with these functions which are all specific to a certain element

//     -      ***NOT ONE FUNCTION THAT OPERATES ON MANY ELEMENTS BUT MANY FUNCTIONS THAT OPERATE ON SINGLE, SPECIFIC ELEMENTS***

//     -      callList is then iterated through and each function is called, executing the addEventListener function for each element

var applyCopyFunc = function(){

    var callList = [];
    
    function addListeners(i){
	return function() {
	    i.addEventListener('click',function(event){
		var area = document.getElementById("area"+i.id);
		console.log(area);
	    });
	};
    };

    for (var i = 0; i < copyList.length; i++){
	callList[i] = addListeners(copyList[i]);
    };

    for (var i = 0; i < copyList.length; i++){
	callList[i]();
    };


    // LOL YOU'D THINK THIS WOULD WORK BUT IT DONT O MAN IT DONT
    // THIS WOULD WORK IN THE CASE OF A SINGLE BUTTON/TEXTAREA PAIR, NOT MULTIPLE
    
    // for(var i = 1; i < copyList.length+1; i++){
    // 	elem = document.getElementById(i);
    // 	console.log(elem);
    // 	elem.addEventListener('click',function(event){
    // 	    var area = document.getElementById("area"+elem.id);
    // 	    console.log(elem.id);
    // 	    area.select();
	    
    // 	    // try {
    // 	    // 	var success = document.execCommand('copy');
    // 	    // 	success ? console.log("copied!") : console.log("failed to copy");
    // 	    // } catch(err){
    // 	    // 	console.log(err.message);
    // 	    // }
    // 	});
	
    // };
};

applyCopyFunc();
