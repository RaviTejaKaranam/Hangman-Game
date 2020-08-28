let game1
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let statusEl = document.querySelector('#status')
window.addEventListener('keypress',function(e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeAGuess(guess)
    render()
})
const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.wordPuzzle.split('').forEach((letter)=>{
        if(letter === ' '){
            const spaceEl = document.createElement('span')
            spaceEl.className = 'space'
            spaceEl.textContent = ' '
            puzzleEl.appendChild(spaceEl)
        }
        else{
            const letterEl = document.createElement('span')
            letterEl.textContent = letter
            puzzleEl.appendChild(letterEl)
        }
    })
}
const startGame = async (count) => {
    let wordCount = count
    const data = await getPuzzle(wordCount)
    game1 = new Hangman(data,5)
    render()
}
startGame(2)
let count
const radios = document.querySelectorAll('input[type=radio][name="difficulty"]')
radios.forEach((radio) => { 
    radio.addEventListener('change',(e)=>{
    count = e.target.value
    startGame(e.target.value) 
})
})

document.querySelector('#reset').addEventListener('click',() => {
    startGame(count)

})
