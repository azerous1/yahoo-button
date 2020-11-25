const yahooAudio = new Audio()
yahooAudio.src = './assets/mario_yahoo.wav';

document.getElementById('yahoo-button').addEventListener('click', (event) => {
    yahooAudio.play()
})