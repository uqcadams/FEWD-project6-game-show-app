// WORDS API IMPLEMENTATION 

// NOTES
// For later -> function to track total number of calls, using local storage


// Pseudo-code
// 1. Counter for number of calls done in session
// 2. if the number of calls is over 2500 --> stop allowing calls to be performed. 
// 2. Create a function to fetch data if the call counter is under 2500 in 24 hours

// Words API Key
const key = '05f03c2e2fmsh608413ac414ac03p1bc261jsn88655230740a';

let phraseArray = [];

// Initialising counter 
let callCounter = 0;

const storeRandomWord = (data) => {

    let randomWordArray = [];
    
    randomWordArray.push(data);

    console.log(randomWordArray);

    return randomWordArray;
};

const convertPhraseToArray = (data) => {
    
    phraseArray = data.word.split("");
    return phraseArray;
  }

// const getRandomWord = async () => {

//     const response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": `${key}`,
//             "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//         }
//     })


const getRandomWord = async () => {

    const response = await fetch("https://wordsapiv1.p.rapidapi.com/words/?hasDetails=typeOf", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${key}`,
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    })
    const data = await response.json();

    return data;
}

getRandomWord()
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));

// getRandomWord()
//     .then(data => {
//         storeRandomWord(data);
//         convertPhraseToArray(data);
//         addPhraseToDisplay(phraseArray);
//     })
//     .catch(error => console.log(error));




