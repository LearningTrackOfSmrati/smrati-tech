import React, { useState, useEffect, useRef } from 'react'
import './Games.css'

const Games = () => {
  return (
    <section id="games" className="games">
      <div className="container">
        <h2 className="section-title">
          Fun & Games
        </h2>
        <p className="games-subtitle">Take a break and challenge yourself with these mini games!</p>
        <div className="games-grid">
          <TicTacToe />
          <WordScramble />
          <SimonSays />
        </div>
      </div>
    </section>
  )
}

// Tic Tac Toe Game
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(null)
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]
    for (let line of lines) {
      const [a, b, c] = line
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index) => {
    if (board[index] || winner) return
    
    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)
    
    const gameWinner = calculateWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
      setScores(prev => ({ ...prev, [gameWinner]: prev[gameWinner] + 1 }))
    } else if (newBoard.every(cell => cell !== null)) {
      setWinner('draw')
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
    } else {
      setIsXNext(!isXNext)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  return (
    <div className="game-card tictactoe-game">
      <h3 className="game-title">⭕ Tic Tac Toe</h3>
      <p className="game-description">Classic strategy game!</p>
      <div className="game-stats">
        <span>X: {scores.X}</span>
        <span>O: {scores.O}</span>
        <span>Draws: {scores.draws}</span>
      </div>
      <div className="tictactoe-board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`tictactoe-cell ${cell ? 'filled' : ''} ${cell === 'X' ? 'x-cell' : ''} ${cell === 'O' ? 'o-cell' : ''}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="game-status">
        {winner ? (
          winner === 'draw' ? (
            <span className="status-text">It's a Draw!</span>
          ) : (
            <span className="status-text">🎉 {winner} Wins!</span>
          )
        ) : (
          <span className="status-text">Next: {isXNext ? 'X' : 'O'}</span>
        )}
      </div>
      <button className="game-reset-btn" onClick={resetGame}>
        New Game
      </button>
    </div>
  )
}

// Word Scramble Game
const WordScramble = () => {
  const words = [
    { word: 'DEVELOPER', hint: 'Someone who writes code' },
    { word: 'JAVASCRIPT', hint: 'Popular programming language' },
    { word: 'PORTFOLIO', hint: 'Collection of work samples' },
    { word: 'CREATIVE', hint: 'Imaginative and original' },
    { word: 'DESIGNER', hint: 'Creates visual content' },
    { word: 'CODING', hint: 'Writing computer programs' },
    { word: 'WEBSITE', hint: 'Pages on the internet' },
    { word: 'PROJECT', hint: 'A planned piece of work' },
  ]

  const [currentWord, setCurrentWord] = useState(null)
  const [scrambled, setScrambled] = useState('')
  const [guess, setGuess] = useState('')
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState('')
  const [gameStarted, setGameStarted] = useState(false)
  const [attempts, setAttempts] = useState(0)

  const scrambleWord = (word) => {
    const arr = word.split('')
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr.join('')
  }

  const startGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)]
    setCurrentWord(randomWord)
    setScrambled(scrambleWord(randomWord.word))
    setGuess('')
    setMessage('')
    setGameStarted(true)
    setAttempts(0)
  }

  const handleSubmit = () => {
    if (!guess) return
    
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (guess.toUpperCase() === currentWord.word) {
      setMessage('🎉 Correct!')
      setScore(score + 1)
      setTimeout(() => {
        startGame()
      }, 1500)
    } else {
      setMessage('❌ Try again!')
      setGuess('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const skipWord = () => {
    startGame()
  }

  return (
    <div className="game-card word-game">
      <h3 className="game-title">🔤 Word Scramble</h3>
      <p className="game-description">Unscramble the word!</p>
      <div className="game-stats">
        <span>Score: {score}</span>
        {gameStarted && <span>Attempts: {attempts}</span>}
      </div>
      {!gameStarted ? (
        <button className="game-start-btn" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <>
          <div className="word-scramble-content">
            <div className="hint-text">Hint: {currentWord.hint}</div>
            <div className="scrambled-word">{scrambled}</div>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your answer"
              className="guess-input"
            />
            <div className="game-buttons">
              <button className="guess-btn" onClick={handleSubmit}>
                Submit
              </button>
              <button className="skip-btn" onClick={skipWord}>
                Skip
              </button>
            </div>
          </div>
          {message && <div className="game-message">{message}</div>}
        </>
      )}
    </div>
  )
}

// Simon Says (Color Memory Game)
const SimonSays = () => {
  const [sequence, setSequence] = useState([])
  const [playerSequence, setPlayerSequence] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerTurn, setIsPlayerTurn] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [activeColor, setActiveColor] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const colors = ['red', 'blue', 'green', 'yellow']

  const startGame = () => {
    const firstColor = colors[Math.floor(Math.random() * colors.length)]
    setSequence([firstColor])
    setPlayerSequence([])
    setScore(0)
    setIsPlaying(true)
    setGameOver(false)
    setTimeout(() => playSequence([firstColor]), 500)
  }

  const playSequence = async (seq) => {
    setIsPlayerTurn(false)
    for (let color of seq) {
      await new Promise(resolve => setTimeout(resolve, 600))
      setActiveColor(color)
      await new Promise(resolve => setTimeout(resolve, 400))
      setActiveColor(null)
    }
    setIsPlayerTurn(true)
  }

  const handleColorClick = (color) => {
    if (!isPlayerTurn || gameOver) return

    const newPlayerSequence = [...playerSequence, color]
    setPlayerSequence(newPlayerSequence)
    setActiveColor(color)
    setTimeout(() => setActiveColor(null), 300)

    // Check if player's move is correct
    if (color !== sequence[newPlayerSequence.length - 1]) {
      // Wrong move - game over
      setGameOver(true)
      setIsPlayerTurn(false)
      if (score > highScore) {
        setHighScore(score)
      }
      return
    }

    // Check if player completed the sequence
    if (newPlayerSequence.length === sequence.length) {
      const newScore = score + 1
      setScore(newScore)
      setPlayerSequence([])
      
      // Add new color to sequence
      const newSequence = [...sequence, colors[Math.floor(Math.random() * colors.length)]]
      setSequence(newSequence)
      
      setTimeout(() => playSequence(newSequence), 1000)
    }
  }

  return (
    <div className="game-card simon-game">
      <h3 className="game-title">🎨 Simon Says</h3>
      <p className="game-description">Remember the sequence!</p>
      <div className="game-stats">
        <span>Score: {score}</span>
        {highScore > 0 && <span>Best: {highScore}</span>}
      </div>
      {!isPlaying ? (
        <button className="game-start-btn" onClick={startGame}>
          Start Game
        </button>
      ) : (
        <>
          <div className="simon-status">
            {gameOver ? '❌ Game Over!' : isPlayerTurn ? 'Your Turn!' : 'Watch...'}
          </div>
          <div className="simon-board">
            {colors.map((color) => (
              <button
                key={color}
                className={`simon-color ${color} ${activeColor === color ? 'active' : ''}`}
                onClick={() => handleColorClick(color)}
                disabled={!isPlayerTurn}
              />
            ))}
          </div>
          {gameOver && (
            <button className="game-reset-btn" onClick={startGame}>
              Try Again
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Games
