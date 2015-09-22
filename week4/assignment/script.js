var theirFinestHour = {
	'author' : "Winston Churchill",
	'year' : 1940,
	'bce' : false
};

var quitIndia = {
	'author' : "Ghandi",
	'year' : 1942,
	'bce' : false
};

var theThirdPilippic = {
	'author' : "Demosthenes",
	'year' : 342,
	'bce' : true
};

var speechArray = [theirFinestHour, quitIndia, theThirdPilippic];

var yearBetweenSpeeches = speechArray[1].year - speechArray[0].year;

console.log(quitIndia.author + "'s speech and " + theirFinestHour.author + "'s speech are " + yearBetweenSpeeches + " years apart.");

document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + speechArray.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by " + speechArray[0].author + " in " + speechArray[0].year + ". It is " + speechArray[0].bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + speechArray[1].author + " in " + speechArray[1].year + ". It is " + speechArray[1].bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + speechArray[2].author + " in " + speechArray[2].year + ". It is " + speechArray[2].bce + " that this year is B.C.E.");
});