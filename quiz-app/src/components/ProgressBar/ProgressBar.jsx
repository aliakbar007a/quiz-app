import "../../style/index.scss"

export const ProgressBar = ({ current, total, question }) => {
    
    return <>
        <span className="active-question-no">{current + 1}</span>
        <span className="total-questions">/{total}</span>
        <h2 className="title-question">{question}</h2>
    </>
} 