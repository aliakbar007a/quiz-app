import { useEffect, useState } from "react";
import { loadHighScores } from "../../utils/HighScore";

export const ScoreTable = () => {
    const [highScores, setHighScores] = useState([]);

    useEffect(()=>{
        setHighScores(loadHighScores)
        console.log(highScores);
        
    },[])
    return (
        <table className="score-table">
                <thead>
                    <tr>
                    <th>رتبه</th>
                    <th>نام</th>
                    <th>امتیاز</th>
                    </tr>
                </thead>
                <tbody>
                     {
                        highScores.map((user, i)=>{
                            return(
                                <tr key={i} className={i === 0 ? "top-score" : ""}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.score}</td>
                                </tr>
                               
                            )
                        })
                    }
                </tbody>
            </table>
    )
}