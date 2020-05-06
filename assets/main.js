// wordToGuessElement
// This is the element that has the word the user is guessing
const wordToGuessElement = document.querySelector('#word-to-guess')

// wordToGuess
// This is the progress the user will see as they guess letters
const wordToGuess = wordToGuessElement.innerText

// guessed word so far
let wordSoFarElement = document.querySelector('#guessing-results')

// wrong guesses
let wrongGuessesElement = document.querySelector('#wrong-guesses')

// DOM variables
const letterInputElement = document.querySelector('#letter-input')
const letterSubmitButton = document.querySelector('#letter-submit-button')
// const lettersAttemptedElement = document.querySelector('#letters-attempted')


// event listener section
letterSubmitButton.addEventListener("click", function () {

    // for readability
    let letter = letterInputElement.value;
    let wordSoFar = wordSoFarElement.innerText

    // if the guessed letter in the wordToGuess
    // then lets see where it is at
    // then while there is still that letter in teh wordToGuess
    // replace them for the wordSoFar
    if (wordToGuess.includes(letter)) {
        
        // consoles are great
        console.log('I see you found a letter')
        // find the first index
        let indexOfLetter = wordToGuess.indexOf(letter);
        // if an index was found wile loop it
        
        while (indexOfLetter >= 0) {
            // set the letter
            wordSoFar = wordSoFar.substr(0,indexOfLetter) + letter + wordSoFar.substr(indexOfLetter+1);
            // see if there is another of this letter
            indexOfLetter = wordToGuess.indexOf(letter, indexOfLetter + 1);
        }

        // let the user see what they have done
        wordSoFarElement.innerText = wordSoFar;
        
    } else {
        // let the user see the wrong guesses
        let wrongGuesses = wrongGuessesElement.innerText
        wrongGuessesElement.innerText = letter + wrongGuesses
    }

    // clear the guessed letter
    letterInputElement.value = '';

});