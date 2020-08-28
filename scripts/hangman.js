class Hangman{
    constructor(word,noOfGuessesLeft){
        let wordArray = word.toLowerCase().split('')
        this.word = wordArray
        this.noOfGuessesLeft = noOfGuessesLeft
        this.guessedLetters = []
        this.status = 'Playing'        
    }
    get wordPuzzle(){
        let theWord = ''
        this.word.forEach((alphabet) => {
            if(alphabet!==' ' && !this.guessedLetters.includes(alphabet)){
                theWord += '*'
            }
            else if(alphabet ===' ' || this.guessedLetters.includes(alphabet)){
                theWord += alphabet
            }
        })
        return theWord        
    }
    makeAGuess(guessedLetter){
        if(this.status === 'Playing'){
            guessedLetter = guessedLetter.toLowerCase()
            if(this.guessedLetters.includes(guessedLetter)){
            }
            else if(!this.guessedLetters.includes(guessedLetter) && !this.word.includes(guessedLetter)){
                this.guessedLetters.push(guessedLetter)
                this.noOfGuessesLeft --
                // return (`You have ${this.noOfGuessesLeft} guesses left`)
            }
            else if(!this.guessedLetters.includes(guessedLetter) && this.word.includes(guessedLetter)){
                this.guessedLetters.push(guessedLetter)
                // return (`You have ${this.noOfGuessesLeft} guesses left`)
            }
            game1.gameStatus()
        }
    }
    gameStatus(){
        if(this.noOfGuessesLeft === 0){
            this.status = 'Failed'
        }
        else if(this.noOfGuessesLeft > 0) {
            let finished = true
            this.word.forEach((alphabet)=>{
                if(this.guessedLetters.includes(alphabet) || alphabet === ' '){
    
                }
                else{
                finished = false
            }
            if(finished === true){
                this.status = 'Finished'
            }
            else{
                this.status = 'Playing'
            }
            })
        }
        return this.status        
    }
    get statusMessage(){
        if(this.status === 'Playing'){
            return `Guesses Left: ${this.noOfGuessesLeft}`
        }
        else if(this.status === 'Failed'){
            return `Nice Try! The Word is "${this.word.join('')}"`
        }
        else{
            return `Good Work! Congrats you guessed the word`
        }       
    }
}
