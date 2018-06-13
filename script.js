
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
let next = $('.next')
let correct = $('.buttonC')
let incorrect = $('.buttonI')
let cardFront = $('.front')
let cardBack = $('.back')
let video = $('.video')
let populateQ
let populateA

// Function to prompt user to push 'begin' button
// function toggleSnackBar() {
//     snackBar.addClass = 'show'

//     setInterval(function() {
//         snackBar.toggleClass('show', '')
//     }, 3000)
// }

// Function to hide flashcards until user clicks 'begin' button
$(function() {
    card.hide()
    next.css('visibility', 'hidden')
    nav.hide()
    aside.hide()
    correct.hide()
    incorrect.hide()
    video.hide()
})

// Function to populate card questions and images
begin.on('click', function() {
    cardQuestion(counter)
    $(this).hide()
    container.css({ 'backgroundImage': 'none' }).css({ 'border': 'none' }).css({ 'box-shadow': 'none' })
    card.show()
    snackBar.html('Choose correct or incorrect')
    nav.show()
    aside.show()
    correct.show()
    incorrect.show()

    setInterval(function() {
        let colors = ['#F090C0', '#18D8F0aa']
        begin.css({ 'background-color': colors})
    }, 500)
})

// Function to populate card answers
card.on('mouseenter', function() {
    cardAnswer(counter)
    card.toggleClass('flipped')
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

// Next card event listener and function
next.on('click', function() {
    counter += 1

    if (counter >= gameCards.length) {
        counter = 0
    }
    
    cardQuestion(counter)
    $(this).css('visibility', 'hidden')
    correct.css('visibility', 'visible')
    incorrect.css('visibility', 'visible')
})

// Tally correct cards
let tallyCorrect = parseInt($('.correct').text())

correct.on('click', () => {
    tallyCorrect += 1
    gameCards.splice(counter, 1)
    
    // function playVideo(ev) {
    //    video.show()
    //    ev.preventDefault() 
    // }
    
    // console.log(gameCards)

    if (tallyCorrect < 5) {
        $('.correct').text( tallyCorrect )
    } else if (tallyCorrect >= 5) {
        card.hide()
        next.hide()
        video.show()
    }

    correct.css('visibility', 'hidden')
    incorrect.css('visibility', 'hidden')
    next.css('visibility', 'visible')
    // snackBar.html('Click the next button').css('left', '49%')
})

// Tally incorrect cards
let tallyIncorrect = parseInt($('.incorrect').text())

incorrect.on('click', () => {
    tallyIncorrect += 1

    if ( tallyIncorrect <= 5 ) {
        $('.incorrect').text(tallyIncorrect)
    }

    incorrect.css('visibility', 'hidden')
    correct.css('visibility', 'hidden')
    next.css('visibility', 'visible')
    // snackBar.html('Click the next button').css('left', '49%')
})
