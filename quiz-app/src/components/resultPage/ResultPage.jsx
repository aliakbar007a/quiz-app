import { SaveScoreForm } from "../saveScoreForm/SaveScoreForm";
import { ScoreTable } from "../scoreTable/ScoreTable";
import { useQuizContext } from "../../context/QuizProvider";
import { useResult } from "../../hooks/useResult";

export const Result = () => {
  const { showScoreList } = useQuizContext()
  const { total, correctCount, wrongCount, score, saveScore} = useResult()
 
  return (
    <div className="result">
      <h3>نتیجه</h3>
       {!showScoreList ? 
        <>
        <p>مجموع سوالات: {total}</p>
        <p>جمع امتیازات: 100/{score}</p> 
        <p>تعداد جواب درست: {correctCount}</p>
        <p>تعداد جواب غلط: {wrongCount}</p> 
        <SaveScoreForm
        onSave={saveScore}
        />
        </>
       : 
        <ScoreTable />
      }
    </div>
  );
};