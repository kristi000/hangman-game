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
    if (toGuessWord === correctLetters.join("")) {
      setIsWin(true)
      checkHasWon()
    }
  }, [correctLetters])

  const checkHasWon = () => {
    if (isWin === true) {
      console.log("fitove karin")
      setIsWin(false)
      setToGuessWord(randomWord())
      setGuessedLetters([])
    }
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
