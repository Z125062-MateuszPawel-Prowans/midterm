/** Title Shuffle Effect
 * This script creates a text shuffle effect for a given element.
    * It randomly changes the letters of the text until it matches the target text.
    * The speed of the shuffle adjusts based on how many letters are correct.
 * Usage: Call textShuffleEffect with the target element and the desired text.
 * Example: textShuffleEffect(document.getElementById('introtext'), 'PORTFOLIO');
*/

function textShuffleEffect(element, targetText) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';    // Define the alphabet to use for shuffling
    var currentText = '';                           // Initialize the current text as an empty string

    var correctCount = 0;

    // Initialize the current text with random letters of the same length as targetText
    for(let i = 0; i < targetText.length; i++) {
        currentText += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    // Define function to update the time interval based on the number of correct letters
    var timeFormula = (correctCount, incorrectCount) => {
        return 200 / incorrectCount;
    };

    // Function to update the interval for the text shuffle effect
    var updateLoopTime = function() {
        clearInterval(textRefresh);
        if(targetText.length - correctCount === 0) {
            return;
        }
        textRefresh = setInterval(loopFunc, timeFormula(correctCount, targetText.length - correctCount));
    };

    // Main loop function that shuffles the text
    var loopFunc = function() {
        for(let i = 0; i < targetText.length; i++) {
            if (currentText[i] !== targetText[i]) {
                let newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                currentText = currentText.substring(0, i) + newLetter + currentText.substring(i + 1);
                if(newLetter === targetText[i]) {
                    correctCount++;
                    updateLoopTime();
                }
            }

            element.innerText = currentText;
        }
    }

    // Start the shuffle effect
    var textRefresh = setInterval(loopFunc, timeFormula(0, targetText.length));
}

window.addEventListener('DOMContentLoaded', () => {
    textShuffleEffect(document.getElementById('introtext'), 'PORTFOLIO');
});