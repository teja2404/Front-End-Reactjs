import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import GameOver from './components/GameOver'

import { WINNING_COMBINATIONS } from './components/wining-combinations'

const PLAYERS = {
  X: 'Player1',
  O: 'Player2'
}

const Intial_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]


function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }

  return currentPlayer
}

function deriveGameboard(gameTurns) {
  let gameBoard = [...Intial_GAME_BOARD.map(array => [...array])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square

    gameBoard[row][col] = player
  }

  return gameBoard
}


function deriveWinner(gameBoard, players) {

  let winner;


  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {

      winner = players[firstSquareSymbol]
    }
  }

  return winner

}


function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameboard(gameTurns)


  let winner = deriveWinner(gameBoard, players)

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, columnIndex) {
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: columnIndex }, player: currentPlayer }, ...prevTurns]

      return updatedTurns
    });
  }


  function handleRestartGame() {
    setGameTurns([])
  }



  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prePlayers => {
      return {
        ...prePlayers,
        [symbol]: newName
      }
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onNameChange={handlePlayerNameChange}></Player>
          <Player intialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} onNameChange={handlePlayerNameChange}></Player>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} rematch={handleRestartGame} />}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} board={gameBoard}></GameBoard>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
