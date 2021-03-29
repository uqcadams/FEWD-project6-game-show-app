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

// Event listeners
startGameButton.addEventListener('click', () => {
    startGameButton.parentElement.style.display = 'none';
})


// Functions 
getRandomPhraseAsArray = (arr) => {
    let randomPhrase = [];
    let randomNumber = (Math.floor(Math.random() * arr.length));
    randomPhrase = phrases[randomNumber];
    randomPhrase = randomPhrase.split('');
    return randomPhrase;
}



