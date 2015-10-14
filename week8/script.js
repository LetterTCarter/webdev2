var divs = document.getElementsByTagName('div');

function resizeBox() {
document.getElementById('box').onclick = function() {
	if (document.getElementById('box').className == "clickStyle") {
		document.getElementById('box').className = "";
	} else {
		document.getElementById('box').className = "clickStyle";
	};
}};

window.onload = function(){
	resizeBox();
}

document.getElementById('box').addEventListener('click', function(){
  resizeBox();
});

document.getElementById('box2').addEventListener('click', function(){
  resizeBox();
});