// DOM selectors //
const qwerty = document.querySelector(`#qwerty`);
const phrase = document.querySelector(`#phrase`);
const startGameButton = document.querySelector('.btn__reset');

// Variables 
let missed = 0;

// Arrays
const phrases = [
    'chr is',
    'jul ia',
    'ri ne',
    'la ura',
    'ch elsea'
];

// Event listeners
startGameButton.addEventListener('click', () => {
    startGameButton.parentElement.style.display = 'none';
})


// Functions 
// -- creates an empty array, generates a random integer based on the length of the input array, uses that number to select a value (as an index). Then splits the selected value into a new array, and returns the new phrase array.
getRandomPhraseAsArray = (arr) => {
    let randomPhrase = [];
    let randomNumber = (Math.floor(Math.random() * arr.length));
    randomPhrase = phrases[randomNumber];
    randomPhrase = randomPhrase.split('');
    return randomPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);

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

// checkLetter = (buttonTarget) => {
//     let letterElements = document.querySelectorAll('.letter)';
//     for ( let i = 0; i > letterElements.length; i++ ) {
//         if ( buttonTarget.textContent === letterElements[i].textContent ) {
//             letterElements[i].className += " show";
//         } else {
//             return null;
//         }
//     }
// }

let targetTest = document.getElementsByTagName('button');

function changeButtonRed(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        arr[i].style.color = 'red';
    }
}



