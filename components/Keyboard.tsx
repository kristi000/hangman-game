import React from "react"
const keyboardLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
]

type keyboardProps = {
  addGuessedLetter: (letter: string) => void
  incorrectLetters: string[]
  correctLetters: string[]
}

const Keyboard = ({
  addGuessedLetter,
  correctLetters,
  incorrectLetters,
}: keyboardProps) => {
  const handleLetterClick = (letter: string) => {
    console.log(letter)
    addGuessedLetter(letter)
  }

  return (
    <div className="max-w-xl">
      {keyboardLetters.map((letter) => {
        return (
          <div className="flex justify-center">
            {letter.map((letter) => {
              const isCorrect = correctLetters.includes(letter)
              const isIncorrect = incorrectLetters.includes(letter)
              const isDisabled = isCorrect || isIncorrect
              return (
                <button
                  onClick={() => handleLetterClick(letter)}
                  className={`keyboard-btn sdsdsanjdsdsds ${
                    isDisabled ? "" : "active:scale-75"
                  }
                  ${isCorrect ? "bg-green-400" : ""}
                  ${isIncorrect ? "bg-gray-500" : ""}
                  `}
                  disabled={isDisabled}
                >
                  {letter}
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
