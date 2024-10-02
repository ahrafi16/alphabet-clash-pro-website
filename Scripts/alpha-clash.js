function press(event) {
    const plyerPressed = event.key;

    if (plyerPressed === 'Escape') {
        gameOver();
    }

    const curentAlphabet = document.getElementById('current-alphabet');
    const currentAlpha = curentAlphabet.innerText;
    const expectedAlpha = currentAlpha.toLowerCase();

    // check
    if (plyerPressed === expectedAlpha) {
        const curentScore = getTextElementValueById('current-score');
        const newScore = curentScore + 1;
        setTextValueElementById('current-score', newScore);
        removeBackgroundColorById(expectedAlpha);
        continueGame();
    }
    else {
        const currentLife = getTextElementValueById('curent-life');
        const newLife = currentLife - 1;
        setTextValueElementById('curent-life', newLife);

        if (newLife === 0) {
            gameOver();
        }
    }
}
document.addEventListener('keyup', press);

function continueGame() {
    const alphabet = getArandomAlphabet();

    // set the alphebet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet.toUpperCase();

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextValueElementById('curent-life', 5);
    setTextValueElementById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    const lastScore = getTextElementValueById('current-score');
    setTextValueElementById('last-score', lastScore);

    // remove current letter background color
    let currentAlphabetforRemove = getElemtTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabetforRemove);
}