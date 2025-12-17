
import { useTimer } from "../../hooks/useTimer";

export const Timer = ({ duration, onTimeUp }) => {
  const { progress } = useTimer({ duration, onTimeUp });

  return (
    <div className="answer-timer-container">
      <div
        className="progress"
        style={{
          width: `${progress}%`,
          backgroundColor:
            progress < 50
              ? "green"
              : progress < 80
              ? "orange"
              : "red",
        }}
      />
    </div>
  );
};