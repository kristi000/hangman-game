"use client"

import React, { useState } from "react"
import Word from "./Word"
import Keyboard from "./Keyboard"

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState<string>("hello")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  )

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters([...guessedLetters, letter])
    console.log(guessedLetters)
  }

  return (
    <div className="flex flex-col items-center">
      <Word toGuessWord={toGuessWord} guessedLetters={guessedLetters} />
      <Keyboard addGuessedLetter={addGuessedLetter} />
    </div>
  )
}

export default Hangman
