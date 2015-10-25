'use strict';
$(document).ready(function() {
    textLogger();
});

//Variables declared
var 
	textInsert,
	paraText,
	pText;

//Simple text logging function adds text to the paragraph section.
function textLogger() {
	var textBox = document.getElementById('pbox');
	textBox.onclick = function() {
	textInsert = prompt("Type some text.");
	paraText = document.createElement("p");
	pText = document.createTextNode(textInsert);
	paraText.appendChild(pText);
	document.getElementById('pbox').appendChild(paraText);
}
};

//Getting all of the divs in order to change their style on click
var listOfDivs = document.getElementsByTagName('div');
//for loop to add event listener to all divs
for(var i = 0; i < listOfDivs.length; i++) {
	listOfDivs[i].addEventListener('click', resizeBox, false);
}
//function applies bigBox css class to all divs
function resizeBox() {
	if(this.className === "") {
		this.className = "bigBox";
	} else {
		this.className = "";
	};
};