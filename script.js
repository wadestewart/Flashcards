// Flashdance Flascards
// User lands on page with Header, Content, and Footer (nav and aside maybe)
// Card in center of screen with (Flashdance image - maybe) and button to start session (prompt for name?)
// User pushes button and is presented with front of card (1/5) that has keyword
// User pushes button on keyboard (or on screen(?))to flip card and reveal answer (definition)
// User checks box (pushes button(?)) to mark correct or incorrect
// As cards are marked correct they are taken out of rotation
// Session is over once user has marked all cards correct

// Bonus: track scores even if page is reloaded
// Bonus: Images on cards
// Bonus: user adds thier own cards

let begin = $('#begin')
begin.on('click', playGame)

function playGame() {
    console.log('clicked')
}

let tally = 0
let correct = $('#buttonC')
let tallyCorrect = parseInt($('.correct').text())

correct.on('click', () => {
    tallyCorrect += 1

    if (tallyCorrect <= 5) {
        $('.correct').text(tallyCorrect)
    }
})

let incorrect = $('#buttonI')
let tallyIncorrect = parseInt($('.incorrect').text())

incorrect.on('click', () => {
    tallyIncorrect += 1

    if (tallyIncorrect <= 5) {
        $('.incorrect').text(tallyIncorrect)
    }
})
