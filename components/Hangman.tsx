"use client"

import React, { useState } from "react"
import Word from "./Word"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState<string>(randomWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  )
  const correctLetters = guessedLetters.filter((letter) =>
    toGuessWord.includes(letter)
  )

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters([...guessedLetters, letter])
    console.log(guessedLetters)
  }

  return (
    <div className="flex flex-col items-center">
      <Word toGuessWord={toGuessWord} guessedLetters={guessedLetters} />
      <Keyboard
        addGuessedLetter={addGuessedLetter}
        incorrectLetters={incorrectLetters}
        correctLetters={correctLetters}
      />
    </div>
  )
}

export default Hangman
