
// Array containing data for flash cards
let counter = 0
let gameCards = [
    {
        Question: "Alexandra 'Alex' Owens",
        Answer: 'A steel town welder with a dream of becoming a professional dancer.',
        imgUrl: 'url(images/alex.jpg)'
    },
    {
        Question: 'Nick Hurley',
        Answer: 'Owner of the steel mill where Alex works, he falls for her after seeing her dance exotically. He would later resign after being swept up in the #MeToo and #TimesUp movement for his obvious sexual harassment.',
        imgUrl: 'url(images/nick.jpg)'
    },
    {
        Question: "Mawby's",
        Answer: "'Gentleman' Club where Alex and her friends work. Many have aspirations beyond dancing exotically.",
        imgUrl: 'url(images/mawbys.jpg)'
    },
    {
        Question: 'Pittsburgh Conservatory of Dance and Repertory',
        Answer: 'Where Alex eventually gets an audition and her dreams come true!',
        imgUrl: 'url(images/pcdr.png)'
    },
    {
        Question: 'Maniac',
        Answer: "Title track from the movie. 'Best song ever written' -Mozart",
        imgUrl: 'url(images/maniac.png)'
    }
]

// Game opening screen, click Begin to start study session! Begin button, flip button, card, front/back of card targeted
let card = $('#card')
let begin = $('#begin')
let flip = $('#flip')
let next = $('#next')
let correct = $('#buttonC')
let incorrect = $('#buttonI')
let cardFront = $('.front')
let cardBack = $('.back')
let buttonDiv = $('#buttons')
let navDiv = $('#nav')
let asideDiv = $('#aside')
let populateQ
let populateA

// Function to hide flashcards until user clicks 'begin' button
$(function() {
    buttonDiv.hide()
    navDiv.hide()
    asideDiv.hide()
})

// Function to populate card questions and images
begin.on('click', function() {
    cardQuestion(counter)
    $(this).hide()
    buttonDiv.show()
    navDiv.show()
    asideDiv.show()
})

// Function to populate card answers
flip.on('click', function() {
    cardAnswer(counter)
    card.toggleClass('flipped')
})

// Function to populate card questions, change background, change 'Begin' button to 'Flip', and flip card when ready
function cardQuestion (counter) {
    let populateQ = gameCards[counter].Question
    // console.log(gameCards)
    let populateImg = gameCards[counter].imgUrl
    // console.log(populateImg)
    cardFront.text(populateQ).css({ 'backgroundImage': populateImg }).css('color', 'white')
    // flip.click(function () {
    //     card.toggleClass('flipped')
    // })
}

function cardAnswer(counter) {
    let populateA = gameCards[counter].Answer
    cardBack.text(populateA)
    // console.log(populateA)
}

// Next card event listener and function
next.on('click', function() {
    counter += 1
    if (counter >= gameCards.length) {
        counter = 0
    }
    cardQuestion(counter)
})

// Tally correct cards
let tallyCorrect = parseInt($('.correct').text())

correct.on('click', () => {
    tallyCorrect += 1
    gameCards.splice(counter, 1)
    
    console.log(gameCards)

    if ( tallyCorrect < 5 ) {
        $('.correct').text( tallyCorrect )
    } else if (tallyCorrect === 5) {
        alert('You are a maniac!')
    }
})

// Tally incorrect cards
let tallyIncorrect = parseInt($('.incorrect').text())

incorrect.on('click', () => {
    tallyIncorrect += 1
    // gameCards.splice(0)

    if ( tallyIncorrect <= 5 ) {
        $('.incorrect').text(tallyIncorrect)
    }
})
