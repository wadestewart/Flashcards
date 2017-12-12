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



const gameCards = [
    {
        Question: "Alexandra 'Alex' Owens",
        Answer: 'A steel town welder with a dream of becoming a professional dancer. *sidenote: she works as an exotic dancer.'
    },

    {
        Question: 'Nick Hurley',
        Answer: 'Owner of the steel mill where ALex works, he falls for her after seeing her dance exotically. *sidenote: he would later resign for the obvious sexual harrasment.'
    },

    {
        Question: "Mawby's",
        Answer: "'Gentleman' Club where ALex and her friends work. Many have aspirations beyond dancing exotically."
    },

    {
        Question: 'Maniac',
        Answer: "Title track from the movie. 'Best song ever written' -Mozart"
    },

    {
        Question: 'Pittsburgh Conservatory of Dance and Repertory',
        Answer: 'Where ALex eventually gets an audition and her dreams come true!'
    }
]

// const eachCard = []
// add counter
// you want this loop be driven user guess rather than a for loop
// for (let i = 0; i > gameCards.length; i++) {
//     let 
// }

let begin = $('#begin')
let cardFront = $('.front')

begin.on('click', playGame)

function playGame() {
    let cardPop = gameCards[0].Question
    cardFront.text(cardPop)
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
