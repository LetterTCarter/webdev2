//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var
    churchillSpeech = {
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
    consoleDisplay = document.getElementById('ConsoleDisplay');

//This function displays the speech author and the year the speech was written.
function getAuthorAndYearString(speech) {
  consoleDisplay.innerHTML = 'This speech was written by ' + speech.author + ' in ' + speech.year + '<br>';
};

//This function displays whether the speech was written in the common era
//or before the common era
function displayBCEString(speech) {
  if(speech.yearIsBCE === true){
    consoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    consoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }
};

//This function is used to display the oldest and newest speeches on the page
function getOldestOrYoungestString(speech) {
  var oldest = speech.year,
      newest = speech.year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speech.year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speech.year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  getAuthorAndYearString(churchillSpeech);

  displayBCEString(churchillSpeech);

  getOldestOrYoungestString(churchillSpeech);

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  getAuthorAndYearString(ghandiSpeech);

  displayBCEString(ghandiSpeech);
  
  getOldestOrYoungestString(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  getAuthorAndYearString(demosthenesSpeech);

  displayBCEString(demosthenesSpeech);

  getOldestOrYoungestString(demosthenesSpeech);
});