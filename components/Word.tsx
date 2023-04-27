import React from "react"

type wordProps = {
  toGuessWord: string
  guessedLetters: string[]
}

const Word = ({ toGuessWord, guessedLetters }: wordProps) => {
  console.log(toGuessWord)
  const toGuessWordArray = toGuessWord.split("")

  return (
    <div className="flex w-full justify-center border-b-2 border-black">
      {toGuessWordArray.map((letter) => {
        return (
          <div
            className={`bg-slate-600 text-white text-2xl uppercase w-10 h-10 rounded-md flex justify-center items-center m-2`}
          >
            {guessedLetters.includes(letter) ? letter : ""}
          </div>
        )
      })}
    </div>
  )
}

export default Word
