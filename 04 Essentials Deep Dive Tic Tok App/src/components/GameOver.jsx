export default function GameOver({ winner, rematch }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner && <p> {winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={rematch}>Rematch!</button>
      </p>
    </div>
  )
}