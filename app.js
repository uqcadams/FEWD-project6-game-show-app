// DOM selectors //
const qwerty = document.querySelector(`#qwerty`);
const phrase = document.querySelector(`#phrase`);
const startGameButton = document.querySelector('.btn__reset');

// Variables 
let missed = 0;

// Arrays
const phrases = [
    'chris',
    'julia',
    'rine',
    'laura',
    'chelsea'
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

// -- takes an array and assigns the "letter" class to the values that are letters, and the "space" class to the spaces.
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


//// startGameButton.addEventListener('click', () => {})
//// const getRandomPhraseAsArray = arr => {}
//// const addPhraseToDisplay = arr => {}
//// const checkLetter = arr => {}
// qwerty.addEventListener('click', e => {})
// const checkWin = () => {}


// @@@ delete this later @@@ pre-places phrase on page
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


checkLetter = (buttonTarget) => {
    let checkLetter = document.querySelectorAll('#phrase li');
    let match = false;

    for (let i = 0; i < checkLetter.length; i++) {
        console.log(checkLetter[i].textContent);
        if (buttonTarget.textContent === checkLetter[i].textContent) {
            checkLetter[i].className += " show";
            return true;
            break;
        }
    }
}


// qwerty.addEventListener('click', e => {})

qwerty.addEventListener("click", (e) => {
  console.log("qwerty event listener activated");

  let clickedButton = e.target;

  if (clickedButton.tagName === "BUTTON") {
    clickedButton.className += " chosen";
    checkLetter(clickedButton);
    clickedButton.disabled = true;
  }
});

// checkLetter = (buttonTarget) => {
//     console.log('check letter function activated');
//     console.log(`buttonTarget.textContent is ${buttonTarget.textContent}`);
//     let letterElements = document.querySelectorAll('.letter');
//     let letterFound = ['hi'];
//     for ( let i = 0; i < letterElements.length; i++ ) {
//         if ( buttonTarget.textContent === letterElements[i].textContent ) {
//             letterElements[i].className += " show";
//             // letterFound += letterFound.push(letterElements[i].textContent);
//             letterFound += letterFound.push(`${letterElements[i].textContent}`);
//             console.log(letterFound);
//             console.log('added class');

//         } 
//         else {
//             missed ++;
//             console.log(`Missed = ${missed}`);
//             // return null;
//         }
//     }
// }



// -- Test to log the target button to the console
// testFunction = (buttonTarget) => {
//     console.log(buttonTarget.textContent);
// }



