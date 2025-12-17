import { useEffect } from 'react';
import { fetchQuestions } from '../services/api';
import { useQuizContext } from '../context/QuizProvider';

export function useQuiz() {
  const {
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    answers,
    setAnswers,
    loading,
    setLoading,
    error,
    setError,
    answerIndex,
    setAnswerIndex,
    answer,
    setAnswer,
    showResult,
    setShowResult,
    userAnswer, 
    setUserAnswer,
    setShowAnswerTimer,
  } = useQuizContext();

  useEffect(() => {
    fetchQuestions()
      .then((qs) => {
        setQuestions(qs);
        setLoading(false);
      })
      .catch((err) => setError(err.message));
  }, []);

function selectAnswer(qId, choiceIndex, selectedText) {

  const correctAnswer = questions[currentIndex].answer;
  const isCorrect = selectedText === correctAnswer;

  setAnswers(prev => ({
    ...prev,
    [qId]: {
      selected: choiceIndex, // ایندکس انتخاب شده
      text: selectedText, // متن گزینه
      correct: isCorrect // درست یا غلط
    }
  }));
  
  // ذخیره کردن ایندکس گزینه انتخاب شده (برای هایلایت کردن)
  setAnswerIndex(choiceIndex);

  // ذخیره کردن نتیجه انتخاب (درست یا غلط)
  setAnswer(isCorrect);
 
}
  function next() {
   setShowAnswerTimer(false);
    
    if (currentIndex !== questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
    setTimeout(() => {
            setShowAnswerTimer(true)
            
        },100);

   }
   const handleTimer = () =>{
        const currentQuestion = questions[currentIndex];
        setAnswers(prev=> ({
          ...prev,
          [currentQuestion.id]: {
            selected: null,
            isCorrect: false,
          }
        })
        )
        next();
        
    }
  return {
    state: { questions, currentIndex, answers, loading, error },
    selectAnswer,
    next,
    handleTimer,
  };
}