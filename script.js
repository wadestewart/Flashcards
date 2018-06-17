// Counter to be associated with index of card in array below
let counter = 0

// Array containing data for flash cards
let gameCards = [
    {
        Question: "Alexandra 'Alex' Owens",
        Answer: 'The epitome of the American dream, from Pittsburgh no less.',
        imgUrl: 'url(images/alex.jpg)'
    },
    {
        Question: 'Nick Hurley',
        Answer: 'The age-old tale of power and entitlement. #MeToo, anyone?',
        imgUrl: 'url(images/nick2.jpg)'
    },
    {
        Question: "",
        Answer: "Are we still calling them 'Gentleman's Clubs'?",
        imgUrl: 'url(images/mawbys2.jpg)'
    },
    {
        Question: 'Pittsburgh Conservatory of Dance and Repertory',
        Answer: 'A bastion of snobbery and delight. A portal to another dream.',
        imgUrl: 'url(images/flashdance-ballet.jpg)'
    },
    {
        Question: "(She's a) Maniac",
        Answer: "'Best song ever written' -Mozart",
        imgUrl: 'url(images/flashdance-water.jpg)'
    }
]

// Game opening screen, click Begin to start study session! Begin button, flip button, card, front/back of card targeted
let container = $('.container')
let card = $('.card')
let begin = $('.begin')
let snackBar = $('#snack-bar')
let nav = $('.nav')
let aside = $('.aside')
let correct = $('.buttonC')
let incorrect = $('.buttonI')
let cardFront = $('.front')
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
    snackBar.hide()
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
    container.css({ 'backgroundImage': 'none' }).css({ 'border': 'none' }).css({ 'box-shadow': 'none' })
    card.show()
    nav.show()
    aside.show()
    correct.show()
    incorrect.show()
    snackBar.show()

    snackBar.addClass = 'show'

    setInterval(function() {
        snackBar.toggleClass('show', '')
    }, 3000)
})

// Function to populate card answers
card.on('click', function() {
    cardAnswer(counter)
    card.toggleClass('flipped')

    snackBar.hide()
})

// Function to populate card questions, change background, and flip card when ready
function cardQuestion (counter) {
    let populateQ = gameCards[counter].Question
    let populateImg = gameCards[counter].imgUrl
    cardFront.text(populateQ).css({ 'backgroundImage': populateImg }).css('color', '#F090C0')
}

function cardAnswer(counter) {
    let populateA = gameCards[counter].Answer
    cardBack.text(populateA)
}

// Tally correct cards
let tallyCorrect = parseInt($('.correct').text())

// Event to handle user choosing correct: increase tally in correct html, increase counter to coincide with index, remove correct card from array, conditional to tally number of correct: (1) if 5, session is complete - show video and hide card, (2) if > 5, populate next card.
correct.on('click', () => {
    tallyCorrect += 1
    gameCards.splice(counter, 1)
    
    if (tallyCorrect < 5) {
        $('.correct').text( tallyCorrect )
    } else if (tallyCorrect >= 5) {
        card.hide()
        video.show()
    }

    counter += 1

    if (counter >= gameCards.length) {
        counter = 0
    }

    cardQuestion(counter)

    // snackBar.html('Click the next button').css('left', '49%')
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

    // snackBar.html('Click the next button').css('left', '49%')
})
