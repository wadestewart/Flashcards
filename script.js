// Looks good! I would add an imageUrl key to your game cards to store the correct image for each question. That way when in your question function starting on line 47, you can use gameCards[counter].imageUrl to insert the correct background image.
// To remove correct guesses from the que I would add a line gameCards.splice(counter, 1) to your correct button click event. That will remove 1 item at the index of the counter.

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
        Answer: "'Gentleman' Club where Aex and her friends work. Many have aspirations beyond dancing exotically."
    },

    {
        Question: 'Pittsburgh Conservatory of Dance and Repertory',
        Answer: 'Where Alex eventually gets an audition and her dreams come true!'
    },

    {
        Question: 'Maniac',
        Answer: "Title track from the movie. 'Best song ever written' -Mozart"
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

// Function to populate card questions, change background, change 'Begin' button to 'Flip', and flip card when ready
function cardQuestion(counter) {
    let populateQ = gameCards[counter].Question
    cardFront.text( populateQ ).css({ 'backgroundImage': 'url(images/alex.jpg)' }).css( 'color', 'white' )
    flip.click(function () {
        card.toggleClass( 'flipped' )
    })
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
    if (counter === 5) {
        counter = 0
    }
    cardQuestion(counter)
    cardFront.text( populateQ ).css({ 'backgroundImage': 'url(images/nick.jpg)'}).css( 'text-align', 'left' )
    cardFront.text( populateQ )//.css({ 'backgroundImage': 'url(images/mawbys.jpg'})
    cardFront.text( populateQ )//.css({ 'backgroundImage': 'url(images/pcdr.png'})
    cardFront.text( populateQ )//.css({ 'backgroundImage': 'url(images/maniac.png'})
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
