// DOM selectors //
  // selects the onscreen keyboard section
const qwerty = document.querySelector(`#qwerty`);
  // selects the container for holding and displaying game phrase
const phrase = document.querySelector(`#phrase`);
  // selects the start button to hide overlay
const startGameButton = document.querySelector('.btn__reset');
  // selects the game overlay
const overlay = document.querySelector('#overlay');


// Variables 
  // stores the number of "missed" guesses 
let missed = 0;

// Arrays
  // stores array of phrases to parse into game
const phrases = [
    'chris',
    'test',
    'one',
    'okay',
    'four'
];

// -- turns the display overlay off to reveal the game board
startGameButton.addEventListener('click', () => {
    startGameButton.parentElement.style.display = 'none';
})

// Functions 
  // -- creates an empty array, generates a random integer based on the length of the input array, uses that number to select a value (as an index). Then splits the selected value into a new array, and returns the new phrase array.
getRandomPhraseAsArray = (arr) => {
  let randomPhrase = [];
  let randomNumber = Math.floor(Math.random() * arr.length);
  randomPhrase = phrases[randomNumber];
  randomPhrase = randomPhrase.split("");
  return randomPhrase;
}

  // -- takes an array and assigns the "letter" class to the values that are letters, and the "space" class to the spaces. Then, it appends them to the phrase section for display on the screen.
addPhraseToDisplay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let ul = phrase.firstElementChild;
    let li = document.createElement("li");
    li.textContent = arr[i];
    if (arr[i] !== " ") {
        li.className = "letter";
    } else {
        li.className = "space";
    }
    ul.appendChild(li);
    console.log(arr[i]);
  }
};


// -- function to compare text content of the button click to elements within the phrase array
checkLetter = (buttonTarget) => {
  // creates a checkLetter array with all li elements in the displayed phrase
    let checkLetter = document.querySelectorAll('#phrase li');
    let match = null;
  // loops through checkLetter array
    for (let i = 0; i < checkLetter.length; i++) {
        console.log(checkLetter[i].textContent);
  // if text of button target is in checkLetter array, add show class to it
        if (buttonTarget.textContent === checkLetter[i].textContent) {
            checkLetter[i].className += " show";
            match = checkLetter[i].textContent;
        }
    }
    return match;   
}

// -- adds a click event to the qwerty element
qwerty.addEventListener("click", (e) => {
  console.log("qwerty event listener activated");

  let clickedButton = e.target;

  // if the target of the click is a button...
  if (clickedButton.tagName === "BUTTON") {
    // ... then add the chosen class to it
    clickedButton.className += " chosen";
    // ... then run the checkLetter function on that button 
    let match = checkLetter(clickedButton);
    // ... then disable the button to prevent further clips
    clickedButton.disabled = true;
    // ... then see if it found a letter
    if (match === null) {
      console.log('no letter was found');
      missed++;
      console.log(missed);
        // selects the heart elements
      let heart = document.querySelector('#scoreboard ol').firstElementChild;
      heart.remove();
    }
  }
  checkWin();
});

checkWin = () => {
  let letters = document.getElementsByClassName('letter');
  let shown = document.getElementsByClassName('show');
  if (letters.length === shown.length) {
    overlay.className += ' win';
    overlay.firstElementChild.textContent = "WINNER!!!"
    overlay.style.display = 'flex';
  } else if (missed > 4) {
    overlay.className += ' lose';
    overlay.firstElementChild.textContent = "YOU HAVE FAILED!!!"
    overlay.style.display = 'flex';
  }
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
