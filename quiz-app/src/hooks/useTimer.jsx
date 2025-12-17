import { useEffect, useRef, useState } from "react";

export function useTimer({ duration, onTimeUp }) {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  const endedRef = useRef(false);

  useEffect(() => {
    setTime(0);
    endedRef.current = false;

    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [duration]);

  useEffect(() => {
    if (time === duration && !endedRef.current) {
      endedRef.current = true;
      clearInterval(intervalRef.current);
       setTimeout(()=>{
        onTimeUp();
      },1000)
    }
  }, [time, duration, onTimeUp]);

  const progress = (time / duration) * 100;

  return {
    time,
    progress,
    isRunning: !endedRef.current,
  };
}
