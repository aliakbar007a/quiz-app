import "../../style/index.scss"


export const Options = ({ question, selected, onSelect }) => {
        return<>
         
           {
            <ul>
                {
                question.options.map((opt, index) => {
                const isSelected = selected?.selected === index;
                return (
                    <li key={index}
                    onClick={()=> onSelect(question.id, index, opt)}
                    className={isSelected ? "selected-answer" : null}>
                    <div>
                        {opt}
                    </div>
                    </li>
                )
            })
            }
            </ul>
         
           }
       </>
    }
 {/* <ul>
            {
                chois && chois?.map((answer, index)=>{
                    return (
                    <li key={index}
                    onClick={()=> onAnswerClick(answer, index)}
                    className={answerIndex === index ? "selected-answer" : null}>
                    {answer}
                    </li>
                    )
                })
                
            }
           </ul> */}