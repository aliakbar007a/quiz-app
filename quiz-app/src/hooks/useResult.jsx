import { saveHighScore } from "../utils/HighScore";
import { useQuizContext } from "../context/QuizProvider";

export const useResult = () => {
  const { questions, answers ,name ,setShowScoreList } = useQuizContext();

  const total = questions.length;
  const correctCount = Object.values(answers).filter(a => a.correct).length;
  const wrongCount = total - correctCount;
  const score = correctCount * 25;

  const saveScore = () => {
    if (!name.trim()) return alert("Please enter your name");
      saveHighScore({ name, score })
      setShowScoreList(true);
    };
  return {
    total,
    correctCount,
    wrongCount,
    score,
    saveScore,
  };
};
