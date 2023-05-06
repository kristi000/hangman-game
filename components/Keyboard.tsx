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
  hasLost: boolean
}

const Keyboard = ({
  addGuessedLetter,
  correctLetters,
  incorrectLetters,
  hasLost,
}: keyboardProps) => {
  const handleLetterClick = (letter: string) => {
    console.log(letter)
    addGuessedLetter(letter)
  }

  return (
    <div className="flex flex-col max-w-xl gap-2 my-3">
      {keyboardLetters.map((letter) => {
        return (
          <div className="flex justify-center gap-3" key={Math.random()}>
            {letter.map((letter) => {
              const isCorrect = correctLetters.includes(letter)
              const isIncorrect = incorrectLetters.includes(letter)
              const isDisabled = isCorrect || isIncorrect || hasLost
              return (
                <button
                  key={letter}
                  onClick={() => handleLetterClick(letter)}
                  className={`keyboard-btn  ${
                    isDisabled
                      ? "hover:border-none"
                      : "active:scale-75 btn-hover"
                  }
                  ${isCorrect ? "bg-green-400" : ""}
                  ${isIncorrect ? "bg-red-600" : ""}
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
