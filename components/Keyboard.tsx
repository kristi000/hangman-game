import React from "react"
const keyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
]

type keyboardProps = {
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({ addGuessedLetter }: keyboardProps) => {
  const handleLetterClick = (letter: string) => {
    console.log(letter)
    addGuessedLetter(letter)
  }

  return (
    <div className="max-w-xl">
      {keyboardLetters.map((letter) => (
        <div className="flex justify-center">
          {letter.map((letter) => (
            <button
              onClick={() => handleLetterClick(letter)}
              className="keyboard-btn"
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
