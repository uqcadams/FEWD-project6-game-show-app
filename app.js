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
// REMOVED --> TAKES ARRAY FROM wordsAPI.js
  // stores array of phrases to parse into game
// const phrases = [
//     'pineapples',
//     'kangaroo',
//     'koala',
//     'platypus',
//     'wombat'
// ];

// const testArrayOfObjects = [
//   {
//     "word": "manuel estrada",
//     "pronunciation": {
//       "all": "'mɑnwɛl_ɛs'tRɑðɑ"
//     }
//   }
// ]


// -- click event for overlay start button. reloads the window to start the game if the reset class has been added to the button. if the the reset class is absent, it starts the game, hides the overlay, and then changes the text and class of the button for when the user wins or loses the game.
startGameButton.addEventListener('click', () => {
    if (startGameButton.className === 'btn__reset reset') {
      window.location.reload();
    }
    startGameButton.parentElement.style.display = 'none';
    reset_button();
})

// -- changes the text of the overlay button and adds a reset button
reset_button = () => {
  startGameButton.textContent = "Try Again";
  startGameButton.className += " reset"
}



// Functions 
// NEW FUNCTIONS

// const convertPhraseToArray = (phraseArray) => {
//   let phrase = [];
//   phrase = phraseArray[0].word.split("");
//   return phrase;
// }

  // -- creates an empty array, generates a random integer based on the length of the input array, uses that number to select a value (as an index). Then splits the selected value into a new array, and returns the new phrase array.
  // replaced with convert phrase to array test function
// getRandomPhraseAsArray = (arr) => {
//   let randomPhrase = [];
//   let randomNumber = Math.floor(Math.random() * arr.length);
//   randomPhrase = phrases[randomNumber];
//   randomPhrase = randomPhrase.split("");
//   return randomPhrase;
// }

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
  }
};


// -- function to compare text content of the button click to elements within the phrase array
checkLetter = (buttonTarget) => {
  // creates a checkLetter array with all li elements in the displayed phrase
    let checkLetter = document.querySelectorAll('#phrase li');
    let match = null;
  // loops through checkLetter array
    for (let i = 0; i < checkLetter.length; i++) {
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
      missed++;
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

// const phraseArray = getRandomPhraseAsArray(randomWordArray);
// addPhraseToDisplay(phraseArray);




