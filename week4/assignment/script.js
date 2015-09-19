document.getElementById('BtnDonate').addEventListener('click', function(){
  console.log("There are " + speechArray.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by " + theirFinestHour.author + " in " + theirFinestHour.year + ". It is " + theirFinestHour.bce + " that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This speech was written by " + quitIndia.author + " in " + quitIndia.year + ". It is " + quitIndia.bce + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by " + theThirdPilippic.author + " in " + theThirdPilippic.year + ". It is " + theThirdPilippic.bce + " that this year is B.C.E.");
});

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

var yearBetweenSpeeches = quitIndia.year - theirFinestHour.year;

console.log(quitIndia.author + "'s speech and " + theirFinestHour.author + "'s speech are " + yearBetweenSpeeches + " years apart.");