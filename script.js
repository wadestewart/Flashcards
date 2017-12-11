// Flashdance Flascards
// User lands on page with Header, Content, and Footer (nav and aside maybe)
// Card in center of screen with (Flashdance image - maybe) and button to start session (prompt for name?)
// User pushes button and is presented with front of card (1/5) that has keyword
// User pushes button on keyboard (or on screen(?))to flip card and reveal answer (definition)
// User checks box (pushes button(?)) to mark correct or incorrect
// As cards are marked correct they are taken out of rotation
// Game is over once user has marked all cards correct

// Bonus: track scores even if page is reloaded
// Bonus: Images on cards
// Bonus: user adds thier own cards

const begin = $('#begin')
begin.on('click', beginGame)

function beginGame() {
    console.log('clicked')
}

const correct = $('#correct')
correct.on('click', tallyCorrect)

function tallyCorrect() {
    console.log('clicked')
}

const incorrect = $('#incorrect')
incorrect.on('click', tallyIncorrect)

function tallyIncorrect() {
    console.log('clicked')
}
