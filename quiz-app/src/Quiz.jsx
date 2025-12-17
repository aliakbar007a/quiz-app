import { ProgressBar } from "./components/ProgressBar/ProgressBar"
import "./style/index.scss"
import { Options } from "./components/options/Questions"
import { Button } from "./components/button/Button"
import { useQuiz } from "./hooks/useQuiz"
import { Result } from "./components/resultPage/ResultPage"
import { useQuizContext } from "./context/QuizProvider"
import { Timer } from "./components/timer/Timer"

export const Quiz = () =>{
      const { state, selectAnswer, next, handleTimer } = useQuiz();
      const { loading, error, questions, currentIndex, answers, showResult, showAnswerTimer } = useQuizContext();

    if (loading) return <div >در حال بارگذاری سوالات...</div>;
    if (error) return <div >خطا: {error}</div>;
    if (!questions.length) return <div >سوالی موجود نیست.</div>;

    const currentQuestion = questions[currentIndex];
    const selected = answers[currentQuestion.id];
    const isLast = currentIndex === questions.length -1;
       
    return <>
    <div className="quiz-container">
        {
            !showResult ? <>
            {showAnswerTimer && 
            <Timer key={currentIndex} duration={10} onTimeUp={handleTimer}/>
            }
            <ProgressBar current={currentIndex} total={questions.length} question={currentQuestion.question}/>
            <Options question={currentQuestion} selected={selected} onSelect={selectAnswer}/>
            <Button onNext={next} disabled={selected === undefined} isLast={isLast}/> 
            </> : <Result  answers={answers}/>
        }
    </div>
    </>
}