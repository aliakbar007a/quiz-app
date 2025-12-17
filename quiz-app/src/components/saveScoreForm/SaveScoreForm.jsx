import { useQuizContext } from "../../context/QuizProvider";

export const SaveScoreForm = ({  onSave }) => {
  const { name, setName } = useQuizContext()
  return (
    <div className="save-score">
      <h3>برای ثبت امتیاز، نام خود را وارد کنید</h3>

      <input
        type="text"
        placeholder="نام شما ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="button" onClick={ onSave}>Save</button>
    </div>
  );
};