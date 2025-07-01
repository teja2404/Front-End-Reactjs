
import { useEffect, useState } from 'react';

export default function ProgresBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime(prevTimer => prevTimer - 10)
    }, 10);

    return () => {
      clearInterval(timerInterval)
    }
  }, [])
  return <progres value={remainingTime} max={timer}></progres>
}