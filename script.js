
// Counter to be associated with index of card in array below
let counter = 0

// Array containing data for flash cards
let gameCards = [
    {
        Question: "Alexandra 'Alex' Owens",
        Answer: 'A steel town welder with a dream of becoming a professional dancer.',
        imgUrl: 'url(images/alex.jpg)'
    },
    {
        Question: 'Nick Hurley',
        Answer: 'Owner of the steel mill where Alex works, he falls for her after seeing her dance exotically. He would later resign after being swept up in the #MeToo and #TimesUp movement for his obvious sexual harassment.',
        imgUrl: 'url(images/nick2.jpg)'
    },
    {
        Question: "Mawby's",
        Answer: "'Gentleman' Club where Alex and her friends work. Many have aspirations beyond dancing exotically.",
        imgUrl: 'url(images/mawbys2.jpg)'
    },
    {
        Question: 'Pittsburgh Conservatory of Dance and Repertory',
        Answer: 'Where Alex eventually gets an audition and her dreams come true!',
        imgUrl: 'url(images/flashdance-ballet.jpg)'
    },
    {
        Question: 'Maniac',
        Answer: "Title track from the movie. 'Best song ever written' -Mozart",
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
let populateQ
let populateA

// Function to prompt user to push 'begin' button
function toggleSnackBar() {
    snackBar.addClass = 'show'

    setInterval(function() {
        snackBar.toggleClass('show', '')
    }, 3000)
}

// Function to hide flashcards until user clicks 'begin' button
$(function() {
    card.hide()
    next.hide()
    nav.hide()
    aside.hide()
    correct.hide()
    incorrect.hide()
})

// Function to populate card questions and images
begin.on('click', function() {
    cardQuestion(counter)
    $(this).hide()
    container.hide()
    card.show()
    snackBar.html('Choose correct or incorrect')
    nav.show()
    aside.show()
    correct.show()
    incorrect.show()

    setInterval(function() {
        begin.css
    })
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
    cardFront.text(populateQ).css({ 'backgroundImage': populateImg }).css('color', 'white')
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
    $(this).hide()

})

// Tally correct cards
let tallyCorrect = parseInt($('.correct').text())

correct.on('click', () => {
    tallyCorrect += 1
    gameCards.splice(counter, 1)
    
    // console.log(gameCards)

    if (tallyCorrect < 5) {
        $('.correct').text( tallyCorrect )
    } else if (tallyCorrect >= 5) {
        alert('You are a maniac!')
        location.reload()
    }

    next.show()
    snackBar.html('Click the next button').css('left', '49%')
})

// Tally incorrect cards
let tallyIncorrect = parseInt($('.incorrect').text())

incorrect.on('click', () => {
    tallyIncorrect += 1

    if ( tallyIncorrect <= 5 ) {
        $('.incorrect').text(tallyIncorrect)
    }

    next.show()
    snackBar.html('Click the next button').css('left', '49%')
})
