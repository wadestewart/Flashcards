
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
let populateQ
let populateA

begin.on('click', function() {
    cardQuestion(counter)
})

// Function to populate 1st card question, change background, change 'Begin' button to 'Flip', and flip card when ready
function cardQuestion(counter) {
    let populateQ = gameCards[counter].Question// Add counter here
    cardFront.text( populateQ ).css({ 'backgroundImage': 'url(images/alex.jpg)' }).css( 'color', 'white' )
    flip.click(function () {
        card.toggleClass( 'flipped' )
    })
    // begin.off( 'click', firstCardQ)
}

// Function to populate 1st card answer
flip.on( 'click', function() {
    cardAnswer(counter)
})

function cardAnswer(counter) {
    let populateA = gameCards[counter].Answer
    cardBack.text( populateA ).css( 'background', '#F090C0')
    flip.click(function () {
        card.toggleClass( 'flipped' )
    })
}

// Next card event listener and function
let next = $('#next')

next.on('click', function() {
    counter++  
    cardQuestion(counter)
    cardFront.text( populateQ ).css({'backgroundImage': 'url(images/nick.jpg)'}).css( 'text-align', 'left' )
})

// Tally correct and incorrect cards
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
