import { useState } from 'react'

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChangeInput(event) {
    setEnteredTask(event.target.value)

  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask)
    setEnteredTask('');
  }
  return (
    <div className="flex items-center gap-4">
      <input type="text" value={enteredTask} onChange={handleChangeInput} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  )
}
