import { useState } from 'react'

export default function Player({ intialName, symbol, isActive, onNameChange }) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(intialName)

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing)
    if (isEditing) {
      onNameChange(symbol, playerName)
    }
  }
  function handleChange(event) {

    setPlayerName(event.target.value)

  }

  let editablePlayerName = <span className="player-name">{playerName}</span>

  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}