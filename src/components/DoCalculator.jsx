import { useEffect } from "react";
import { useState } from "react";

export const DoCalculator = () => {

    const [solvedCounter, setSolvedCounter] = useState(0);
    const [question, setQuestion] = useState({});
    const [userInput, setUserInput] = useState("");
    const [reload, setReload] = useState(false);

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber;
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
        const sastaUserInput = e.target.value;
        if(parseInt(sastaUserInput) === question.answer){
            setTimeout(() => {
                setReload(true);
                setUserInput("");
                setSolvedCounter(solvedCounter + 1);
            }, 1000 * 0.2)
        }
    }

    useEffect(() => {
        const number1 = generateNumber();
        const number2 = generateNumber();
        setQuestion({
            number1,
            number2,
            operation: "+",
            answer: number1 + number2
        })
        if(reload) setReload(false);
    },[reload]);

  return (
    <> 
        <div className="absolute top-0 left-0 m-10 text-2xl">{solvedCounter}</div>
        <div className="question-container">
            {/* <h1 className="font-bold mb-5">Question</h1> */}
            <h2 className="font-bold text-9xl mb-10">{question.number1} {question.operation} {question.number2}</h2>
        </div>
        <div className="answer-container">
            <input className="focus:outline-none text-5xl p-4 w-96 h-20 rounded" type="number" value={userInput} onChange={handleUserInput}/>
        </div>
    </>
  )
}
