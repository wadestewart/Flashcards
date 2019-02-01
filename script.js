// Counter to be associated with index of card in array below
let counter = 0

// Array containing data for flash cards
let gameCards = [
    {
        Question: "The movie's main character. An 18 year-old welder from Pittsburgh with dreams of being a professional dancer.",
        Answer: "Alexandra 'Alex' Owens",
        imgUrl: 'url(images/alex.jpg)'
    },
    {
        Question: "The owner of the steel mill where Alex works by day. I'm not going to delve too far into this plot line due to the #metoo implications.",
        Answer: 'Nick Hurley',
        imgUrl: 'url(images/nick2.jpg)'
    },
    {
        Question: "Neighborhood bar & grille that hosts a cabaret where Alex and her friends perform.",
        Answer: "",
        imgUrl: 'url(images/mawbys2.jpg)'
    },
    {
        Question: 'Alex gets a shot at her dream of formal dance training, but first must pass an audition at this prestigious institution.',
        Answer: 'Pittsburgh Conservatory of Dance and Repertory',
        imgUrl: 'url(images/flashdance-ballet.jpg)'
    },
    {
        Question: "'Best song ever written' -Mozart",
        Answer: "(She's a) Maniac",
        imgUrl: 'url(images/flashdance-water.jpg)'
    }
]

// Game opening screen, click Begin to start study session! Begin button, flip button, card, front/back of card targeted
let container = $('.container')
let card = $('.card')
let begin = $('.begin')
let nav = $('.nav')
let aside = $('.aside')
let correct = $('.buttonC')
let incorrect = $('.buttonI')
let cardFront = $('#front')
let cardBack = $('.back')
let video = $('.video')
let populateQ
let populateA

// Function to hide flashcards until user clicks 'begin' button
$(function() {
    aside.hide()
    card.hide()
    correct.hide()
    incorrect.hide()
    nav.hide()
    video.hide()
})

// Function to reload page if user clicks header
function reload () {
    location.reload()
}

// Event to populate card questions and images, snack-bar to prompt user to click image to reveal definition
begin.on('click', function() {
    cardQuestion(counter)
    $(this).hide()
    container.css({
        'backgroundImage': 'none',
        'border': 'none',
        'box-shadow': 'none'
    })
    card.show()
    nav.show()
    aside.show()
})

// Function to populate card answers
card.on('click', function() {
    cardAnswer(counter)
    card.toggleClass('flipped')

    correct.show()
    incorrect.show()
})

// Function to populate card questions, change background, and flip card when ready
function cardQuestion (counter) {
    let populateQ = gameCards[counter].Question
    cardFront.text(populateQ)
}

// Function to populate card answer
function cardAnswer(counter) {
    let populateA = gameCards[counter].Answer
    let populateImg = gameCards[counter].imgUrl
    cardBack.text(populateA).css({
        'backgroundImage': populateImg,
        'color': '#F090C0',
    })
}

// Tally correct cards
let tallyCorrect = parseInt($('.correct').text())

// Event to handle user choosing correct: increase tally in correct html, increase counter to coincide with index, remove correct card from array, conditional to tally number of correct: (1) if 5, session is complete - show video and hide card, (2) if > 5, populate next card.
correct.on('click', () => {
    tallyCorrect += 1
    gameCards.splice(counter, 1)
    
    if (tallyCorrect < 5) {
        $('.correct').text( tallyCorrect )
    } else if (tallyCorrect == 5) {
        card.hide()
        video.show()
    }

    counter += 1

    if (counter >= gameCards.length) {
        counter = 0
    }

    cardQuestion(counter)
    card.toggleClass('flipped')
    correct.hide()
    incorrect.hide()
})

// Tally incorrect cards
let tallyIncorrect = parseInt($('.incorrect').text())

// Event to handle user choosing incorrect: increase tally in incorrect html, increase counter to coincide with index, reset counter if at the end of array, populate next card.
incorrect.on('click', () => {
    tallyIncorrect += 1

    if ( tallyIncorrect < 5 ) {
        $('.incorrect').text(tallyIncorrect)
    }

    counter += 1

    if (counter >= gameCards.length) {
        counter = 0
    }

    cardQuestion(counter)
    card.toggleClass('flipped')
    correct.hide()
    incorrect.hide()
})
