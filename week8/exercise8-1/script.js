var 
	newHeading3,
    h3Text,
    para,
    paraText,
    namePrompt;

function nameLogger() {
	namePrompt = prompt("What is your name?");
	newHeading3 = document.createElement("h3");
	h3Text = document.createTextNode(namePrompt);
	newHeading3.appendChild(h3Text);
	document.getElementById('box').appendChild(newHeading3);
};

function thankYou() {
	para = document.createElement("p");
	paraText = document.createTextNode("Thank you for playing");
	para.appendChild(paraText);
	document.getElementById('box').appendChild(para);
}

nameLogger();

setTimeout(nameLogger, 5000);
setTimeout(thankYou, 8000);

