var 
	box = document.getElementById('box');

//Function created to change the displayed text on click
function textChange() {
	box.onclick = function() {
	//Check to see if there is text in the div with ID of box.
	//Change the text and add newStyle class when the DIV text is clicked.
	if (box.innerHTML == "This is my text.") {
		box.innerHTML = "";
	} else {
		box.innerHTML = "Woah, this is yellow text and it moved over here!";
		box.className = "newStyle"; //
	};
}};

//Run the function on page load.
window.onload = function() {
	textChange();
};