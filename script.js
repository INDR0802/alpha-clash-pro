function showScreen(id) {
    a = document.getElementById(id)
    a.classList.remove('hidden')
}

function removeScreen(id) {
    a = document.getElementById(id)
    a.classList.add('hidden')
}

function gameOver() {
    removeScreen('playground')
    showScreen('score-screen')

    lastScore = document.getElementById('score').innerText
    document.getElementById('finalScore').innerText = lastScore

    keyboard = document.getElementById(alphabetArray[num]).classList
    keyboard.remove('bg-orange-500')
}

function keypress(event) {

    displayAlphabet = document.getElementById('screen').innerText
    pressed = event.key.toUpperCase()

    if (displayAlphabet === pressed) {
        console.log('you have pressed', pressed)

        // get current score
        let score = parseInt(document.getElementById('score').innerText)
        console.log(score)

        // update score
        updatedScore = score + 1
        document.getElementById('score').innerText = updatedScore
        // start a new round
        play()
        keyboard = document.getElementById(pressed.toLowerCase()).classList
        keyboard.remove('bg-orange-500')
    }
    else if (pressed == 'ESCAPE') {
        gameOver()
    }
    else {
        life = parseInt(document.getElementById('life').innerText)
        updatedLife = life - 1
        document.getElementById('life').innerText = updatedLife

        if (updatedLife === 0) {
            gameOver()
        }
    }


}

addEventListener('keyup', keypress)

function gameLoop() {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // console.log(alphabet)
    alphabetArray = alphabet.split('')
    num = Math.round(Math.random() * 25)

    document.getElementById('screen').innerText = alphabet[num]

    keyboard = document.getElementById(alphabetArray[num]).classList
    keyboard.add('bg-orange-500')
    // console.log(keyboard)
}

function play() {
    // homeScreen = document.getElementById("home-screen")
    // homeScreen.classList.add('hidden')

    // play = document.getElementById("playground")
    // play.classList.remove('hidden')
    removeScreen('home-screen')
    showScreen('playground')
    gameLoop()
}

function playAgain() {
    removeScreen('score-screen')
    document.getElementById('score').innerText = 0
    document.getElementById('life').innerText = 5
    play()
}