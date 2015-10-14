function resizeBox() {
document.getElementById("exercise").onmouseover = function() {
	if (document.getElementById("exercise").className == "clickStyle") {
		document.getElementById("exercise").className = "";
	} else {
		document.getElementById("exercise").className = "clickStyle";
	};
}};

window.onload = function() {
	resizeBox();
}