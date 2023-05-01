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
        <div>loading...</div>
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
