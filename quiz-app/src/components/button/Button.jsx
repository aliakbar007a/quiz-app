import "../../style/index.scss"

export const Button = ({  onNext, disabled, isLast }) => {
   
    return (
       <div className="footer">
         <button onClick={(e) => onNext(e.target.value)} disabled={disabled}>
            {isLast ? "Finish" : "Next"}
        </button>
       </div>
    )
}
