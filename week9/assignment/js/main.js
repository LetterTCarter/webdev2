
'use strict';
$(document).ready(function() {
	document.getElementById('pbox').innerHTML = "jQuery is loaded and ready to go. Click to add some text.";
	textLogger();
});

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

var 
	newPara,
    pText,
    para,
    paraText,
    textPrompt,
    box = document.getElementById('pbox');

function textLogger() {
	box.onclick = function () {
	textPrompt = prompt("Why don't you add some text?");
	box.innerHTML = textPrompt;
	};
};