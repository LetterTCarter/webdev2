// creating the new elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");
var newHeading2 = document.createElement("h2");

// creating child nodes
var h1Text = document.createTextNode("This is my heading.");
var paraText = document.createTextNode("This is my paragraph text in all it's glory");
var h2Text = document.createTextNode("This is an H2.");

// adding child nodes
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);
newHeading2.appendChild(h2Text);

// attaching new elements to the document
document.getElementById("exercise").appendChild(newHeading);
document.getElementById("exercise").appendChild(newParagraph);
document.getElementById("exercise").appendChild(newHeading2);

// changing CSS style on mouse click
function preparePage() {
document.getElementById("exercise").onclick = function() {
	if (document.getElementById("exercise").className == "clickStyle") {
		document.getElementById("exercise").className = "";
	} else {
		document.getElementById("exercise").className = "clickStyle";
	};
}};

window.onload = function() {
	preparePage();
}