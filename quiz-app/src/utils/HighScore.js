// export const loadHighScores = () => {
//   return JSON.parse(localStorage.getItem("highScores")) || [];
// };

// export const saveHighScores = (scores) => {
//   localStorage.setItem("highScores", JSON.stringify(scores));
// };

const KEY = "highScores";

export const loadHighScores = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

export const saveHighScore = (newScore) => {
  const scores = loadHighScores();
  const updated = [...scores, newScore].sort((a, b) => b.score - a.score);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
};