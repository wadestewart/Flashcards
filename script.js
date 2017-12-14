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



// Array containing data for flash cards
let counter = 0
const gameCards = [
    {
        Question: "Alexandra 'Alex' Owens",
        Answer: 'A steel town welder with a dream of becoming a professional dancer. *sidenote: she works as an exotic dancer.'
    },

    {
        Question: 'Nick Hurley',
        Answer: 'Owner of the steel mill where Alex works, he falls for her after seeing her dance exotically. *sidenote: he would later resign for the obvious sexual harrasment.'
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

// Game opening screen, click Begin to start study session! Begin button, flip button, card, front/back of card targeted
let card = $( '#card' )
let begin = $( '#begin' )
let flip = $( '#flip' )
let cardFront = $( '.front' )
let cardBack = $( '.back' )

begin.on('click', firstCardQ)

flip.click(function () {
    card.toggleClass( 'flipped' )
})

// Function to populate 1st card question, change background, change 'Begin' button to 'Flip', and flip card when ready
function firstCardQ() {
    let cardPop1Q = gameCards[0].Question// Add counter here
    cardFront.text( cardPop1Q ).css({ 'backgroundImage': 'url(images/alex.jpg)' }).css( 'color', 'white' )
    begin.off( 'click', firstCardQ)
}

// Function to populate 1st card answer
flip.on( 'click', firstCardA )

function firstCardA() {
    let cardPop1A = gameCards[0].Answer
    cardBack.text( cardPop1A ).css( 'background', '#F090C0')
    // flip.off( 'click', firstCardA)
}

// Next card event listener and function
let next = $('#next')

next.on('click', secondCardQ)

function secondCardQ () {
    let cardPop2Q = gameCards[1].Question
    cardFront.text( cardPop2Q ).css({'backgroundImage': 'url(images/nick.jpg)'}).css( 'text-align', 'left' )
}

flip.on( 'click', secondCardA)

function secondCardA () {
    let cardPop2A = gameCards[1].Answer
    cardBack.text( cardPop2A ).css( 'background', '#F090C0')
}

let correct = $( '#buttonC' )
let tallyCorrect = parseInt($( '.correct' ).text())

correct.on('click', () => {
    tallyCorrect += 1

    if ( tallyCorrect < 5 ) {
        $( '.correct' ).text( tallyCorrect )
    } else if ( tallyCorrect === 5 ) {
        alert( 'You are a maniac!' )
    }
})

let incorrect = $( '#buttonI' )
let tallyIncorrect = parseInt($( '.incorrect' ).text())

incorrect.on('click', () => {
    tallyIncorrect += 1

    if ( tallyIncorrect <= 5 ) {
        $( '.incorrect' ).text( tallyIncorrect )
    }
})
