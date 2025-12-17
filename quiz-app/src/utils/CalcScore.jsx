export const calcTotalScore = (correct, wrong, pointPerQuestion = 5) => {
  return correct * pointPerQuestion;
};