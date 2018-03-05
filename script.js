
// Array containing data for flash cards
let counter = 0
const gameCards = [
    {
        Question: "Alexandra 'Alex' Owens",
        Answer: 'A steel town welder with a dream of becoming a professional dancer. *sidenote: she works as an exotic dancer.'
    },

    {
        Question: 'Nick Hurley',
        Answer: 'Owner of the steel mill where Alex works, he falls for her after seeing her dance exotically. *sidenote: he would later resign for the obvious sexual harassment.',
        // imgFile: 'url(images.nick.jpg)'
    },

    {
        Question: "Mawby's",
        Answer: "'Gentleman' Club where Alex and her friends work. Many have aspirations beyond dancing exotically.",
        // imgFile: 'url(images/mawbys.jpg)'
    },

    {
        Question: 'Pittsburgh Conservatory of Dance and Repertory',
        Answer: 'Where Alex eventually gets an audition and her dreams come true!',
        // imgFile:'images/pcdr.png'
    },

    {
        Question: 'Maniac',
        Answer: "Title track from the movie. 'Best song ever written' -Mozart",
        // imgFile: 'images/maniac.png'
    }
]

// Game opening screen, click Begin to start study session! Begin button, flip button, card, front/back of card targeted
let card = $( '#card' )
let begin = $( '#begin' )
let next = $('#next')
let correct = $( '#buttonC' )
let incorrect = $( '#buttonI' )
let cardFront = $( '.front' )
let cardBack = $( '.back' )
let populateQ
let populateA

begin.on('click', function() {
    cardQuestion(counter)
})

// Function to populate card questions, change background, change 'Begin' button to 'Flip', and flip card when ready
function cardQuestion (counter) {
    let populateQ = gameCards[counter].Question
    cardFront.text( populateQ ).css({ 'backgroundImage': 'url(images/alex.jpg)' }).css( 'color', 'white' )
    begin.text('Flip')
    begin.click(function () {
        card.toggleClass( 'flipped' )
    })
    // begin.off()
}

// Function to populate 1st card answer
begin.on( 'click', function() {
    cardAnswer(counter)
})

function cardAnswer (counter) {
    let populateA = gameCards[counter].Answer
    cardBack.text( populateA ).css( 'background', '#F090C0')
    begin.click(function () {
        card.toggleClass( 'flipped' )
    })
}

// Next card event listener and function
next.on('click', function() {
    counter++ 
    if (counter === 5) {
        counter = 0
    }
    cardQuestion(counter)
    cardFront.text( populateQ ).css({ 'backgroundImage': 'url(images/nick.jpg)'}).css( 'text-align', 'left' )
    cardFront.text( populateQ )//.css({ 'backgroundImage': 'url(images/mawbys.jpg'})
    cardFront.text( populateQ )
    cardFront.text( populateQ )
})

// Tally correct cards
let tallyCorrect = parseInt($( '.correct' ).text())

correct.on('click', () => {
    tallyCorrect += 1

    if ( tallyCorrect < 5 ) {
        $( '.correct' ).text( tallyCorrect )
    } else if ( tallyCorrect === 5 ) {
        alert( 'You are a maniac!' )
    }
})

// Tally incorrect cards
let tallyIncorrect = parseInt($( '.incorrect' ).text())

incorrect.on('click', () => {
    tallyIncorrect += 1
    gameCards.splice(0)

    if ( tallyIncorrect <= 5 ) {
        $( '.incorrect' ).text( tallyIncorrect )
    }
})
