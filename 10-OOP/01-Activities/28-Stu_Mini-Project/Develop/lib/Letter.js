class Letter {
   constructor(letter) {
        this.visible = false;
        this.letter = letter;
   }

   guess(letter) {
    //if the letter is in the word
    //then, set the visibility of this letter to true
    //otherwise, it remains false
   }

   toString() {
    //check if letter was guessed, and return letter
     return 'guessed-letter';
   }

   getSolution() {
    //logic letter
    return 'some-character'
   }


}

module.exports = Letter;
