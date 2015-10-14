var divs = getElementsByTagName('div');

function resizeBox() {
document.getElementById('exercise').onclick = function() {
	if (document.getElementById('exercise').className == "clickStyle") {
		document.getElementById('exercise').className = "";
	} else {
		document.getElementById('exercise').className = "clickStyle";
	};
}};

document.getElementById('exercise').addEventListener('click', function(){
  resizeBox();
});

document.getElementById('exercise2').addEventListener('click', function(){
  resizeBox();
});