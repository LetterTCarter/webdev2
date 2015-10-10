//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt,
    newHeading3,
    h3Text,
    articles = document.getElementsByTagName("article"),
    ConsoleDisplay = document.getElementById("ConsoleDisplay");

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donation = prompt("How much would you like to donate?");

  //Clear speech info
  ConsoleDisplay.innerHTML = "";

  if(newHeading3 !== null){
    SideNav.removeChild(SideNav.lastChild);
  }

  if(donation < 100){

  //Create new h3 element
  newHeading3 = document.createElement("h3");

  //Create new text node
  h3Text = document.createTextNode("Thank you for your donation of $" + donation + ".");

  //Adding the child node
  newHeading3.appendChild(h3Text);

  //Inserting the new nodes
  document.getElementById("SideNav").appendChild(newHeading3);
  for(var i = 0; i < articles.length; i++) {
    articles[i].className = "";
  };
} else if(donation >= 100) {
  newHeading3 = document.createElement("h3");

  //Create new text node
  h3Text = document.createTextNode("Thank you for your very generous donation!");
  //Adding the child node
  newHeading3.appendChild(h3Text);
  newHeading3.setAttribute('style', 'color: red');

  //Inserting the new nodes
  document.getElementById("SideNav").appendChild(newHeading3);
  
  //Changing article elements to red based on donation
  for(var i = 0; i < articles.length; i++) {
    articles[i].className = "generous-donation";
  };
}
  
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
    ConsoleDisplay.innerHTML ='This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + ". <br><br>";

  if(speechesArray[0].yearIsBCE === true){
    ConsoleDisplay.innerHTML += ' This speech took place before the common era.<br><br>';
  }else{
    ConsoleDisplay.innerHTML += ' This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    ConsoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[0].year === newest){
    ConsoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  ConsoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + ". <br><br>";

  if(speechesArray[1].yearIsBCE === true){
    ConsoleDisplay.innerHTML +='This speech took place before the common era.<br><br>';
  }else{
    ConsoleDisplay.innerHTML += 'This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    ConsoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[1].year === newest){
    ConsoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  ConsoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + ".<br><br>";

  if(speechesArray[2].yearIsBCE === true){
    ConsoleDisplay.innerHTML += 'This speech took place before the common era.<br><br>';
  }else{
    ConsoleDisplay.innerHTML += 'This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    ConsoleDisplay.innerHTML += 'This is the oldest speech on the page.';
  }
  if(speechesArray[2].year === newest){
    ConsoleDisplay.innerHTML += 'This is the most recent speech on the page.';
  }
});