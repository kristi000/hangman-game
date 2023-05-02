"use client"

import React, { useEffect, useState } from "react"
import Word from "./Word"
import Keyboard from "./Keyboard"
import words from "./wordList.json"

const Hangman = () => {
  const [toGuessWord, setToGuessWord] = useState<string>("")
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [isWin, setIsWin] = useState<boolean>(false)
  console.log(isWin)
  function randomWord() {
    return words[Math.floor(Math.random() * words.length)]
  }

  useEffect(() => {
    setToGuessWord(randomWord())
  }, [])

  const incorrectLetters = guessedLetters.filter(
    (letter) => !toGuessWord.includes(letter)
  )

  const correctLetters = guessedLetters.filter((letter) =>
    toGuessWord.includes(letter)
  )

  const addGuessedLetter = (letter: string) => {
    setGuessedLetters([...guessedLetters, letter])
  }

  useEffect(() => {
    if (
      toGuessWord.split("").every((letter) => correctLetters.includes(letter))
    ) {
      setIsWin(true)
    }
    if (toGuessWord === "") {
      setIsWin(false)
    }
  }, [guessedLetters])

  const resetBtn = () => {
    setIsWin(false)
    setToGuessWord(randomWord())
    setGuessedLetters([])
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
        <div className="flex flex-row m-32">
          <svg className="animate-spin h-24 w-24 mr-3 ..." viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        </div>
      )}
      <div className="flex flex-row items-center gap-5">
        <button className="control-btn" onClick={resetBtn}>
          Reset
        </button>
        <button className="control-btn" onClick={resetBtn}>
          New Word
        </button>
      </div>
    </div>
  )
}

export default Hangman
