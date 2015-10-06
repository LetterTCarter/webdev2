// creating the new elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

// creating child nodes
var h1Text = document.createTextNode("This is my heading.");
var paraText = document.createTextNode("This is my paragraph text in all it's glory");

// adding child nodes
newHeading.appendChild(h1Text);
newParagraph.appendChild(paraText);

// attaching new elements to the document
document.getElementById('exercise').appendChild(newHeading);
document.getElementById('exercise').appendChild(newParagraph);

// aligning paragraph content
newParagraph.setAttribute("align", "center");