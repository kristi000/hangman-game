"use client"

import React, { useEffect, useState } from "react"
import Word from "./Word"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState<string>("hello")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(toGuessWord)

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  )

  const correctLetters = guessedLetters.filter((letter) =>
    toGuessWord.includes(letter)
  )

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters([...guessedLetters, letter])
  }

  return (
    <div className="flex flex-col items-center">
      <Word toGuessWord={toGuessWord} guessedLetters={guessedLetters} />

      {toGuessWord ? (
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          incorrectLetters={incorrectLetters}
          correctLetters={correctLetters}
        />
      ) : (
        <div>loading...</div>
      )}
    </div>
  )
}

export default Hangman
