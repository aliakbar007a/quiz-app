import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ answerIndex, setAnswerIndex ] = useState(null);
  const [ answer, setAnswer ] = useState(null);
  const [ showResult, setShowResult ] = useState(false);
  const [ userAnswer, setUserAnswer ] = useState([]);
  const [ name, setName ] = useState("");
  const [ showScoreList, setShowScoreList ] = useState(false);
  const [ counter, setCounter ] = useState(0);
  const [ progressLoaded, setProgressLoaded ] = useState(0);
  const [ showAnswerTimer, setShowAnswerTimer] = useState(true);
  const value = {
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
    name, 
    setName,
    showScoreList, 
    setShowScoreList,
    counter, 
    setCounter,
    progressLoaded,
    setProgressLoaded,
    showAnswerTimer, 
    setShowAnswerTimer,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  return useContext(QuizContext);
}