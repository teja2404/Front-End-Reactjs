import { useState, useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerRemaining, setTimerRemaining] = useState(targetTime * 1000)
  // const [timerExpired, setTimerExpired] = useState(false)
  // const [timerStarted, setTimerStarted] = useState(false)
  const timerIsActive = timerRemaining > 0 && timerRemaining < targetTime * 1000;

  if (timerRemaining <= 0) {
    clearInterval(timer.current)
    dialog.current.open();
  }

  function handleReset() {
    setTimerRemaining(targetTime * 1000)

  }

  function handleStart() {
    timer.current = setInterval(() => {
      // setTimerExpired(true)
      // dialog.current.open();
      setTimerRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10)
    setTimerStarted(true)
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current)
    setTimerStarted(false)

  }

  return (

    <>
      <ResultModal targetTime={targetTime} remainingTime={timerRemaining} ref={dialog} onReset={handleReset}></ResultModal>
      <section className="challenge">
        <h2>{title}
          {/* {timerExpired && <p>You Lost !</p>} */}
          <p className="challenge-time">
            {targetTime}second{targetTime > 1 ? 's' : undefined}
          </p>
          <p>
            <button onClick={timerIsActive ? handleStop : handleStart}>
              {timerIsActive ? 'Stop' : 'Start'} Challenge
        </button>
          </p>
          <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Time is running...' : 'Timer inactive'}
          </p>
        </h2>
      </section>
    </>

  )

}