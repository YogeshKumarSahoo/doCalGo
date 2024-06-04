import { useEffect, useState } from "react"
import { Question } from "../Question"
import { ScoreCard } from "../ScoreCard"
import "./DoCalGoResponsive.css"

export const DoCalGoResponsive = () => {

    const [counter, setCounter] = useState({
        correctCount: 0,
        incorrectCount: 0,
        totalCount: 0
    });

    const [question, setQuestion] = useState({});
    const [userInput, setUserInput] = useState("");
    const [reload, setReload] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        return randomNumber;
    }

    const isCorrectAnswer = (userInput) => {
        if(userInput.toString().length === question.answer.toString().length) {
            
            if(parseInt(userInput) === question.answer) {
                setTimeout(() => {
                    setReload(true);
                    setUserInput("");
                    setCounter({
                        ...counter,
                        correctCount: counter.correctCount + 1,
                        totalCount: counter.totalCount + 1,
                    })
                    setShowResponse(true);
                    setIsCorrect(true);
                    if('vibrate' in navigator){
                        navigator.vibrate(50);
                    }
                }, 1000 * 0.2)
            } else {
                setTimeout(() => {
                    setReload(true);
                    setUserInput("");
                    setCounter({
                        ...counter,
                        incorrectCount: counter.incorrectCount + 1,
                        totalCount: counter.totalCount + 1,
                    });
                    setShowResponse(true);
                    setIsCorrect(false);
                    if('vibrate' in navigator){
                        navigator.vibrate(200);
                    }
                }, 1000 * 0.2)
            }

        }
    }

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
        isCorrectAnswer(e.target.value);
    }

    useEffect(() => {
        const number1 = generateNumber();
        const number2 = generateNumber();
        setQuestion({
            number1,
            number2,
            operation: "+",
            answer: number1 + number2,
        });
        if (reload) {
            setReload(false);
            setTimeout(() => {
                setShowResponse(false);
            }, 1000 * 0.2)
        }
    }, [reload]);

  return (
    <div>
        <ScoreCard correct={counter.correctCount} incorrect={counter.incorrectCount} />
        <div className="p-10">
            <Question number1={question.number1} operation={question.operation} number2={question.number2} />
            <div className="answer-container flex justify-center">
                <input
                    className={`focus:outline-none text-5xl p-4 w-72 md:w-96 h-20 rounded 
                        ${showResponse ? (isCorrect ? "border-green-500 border-4 green-shadow" : "border-red-500 border-4 red-shadow") : "border-black border-2 no-shadow"}
                    `}
                    type="number"
                    value={userInput}
                    onChange={handleUserInput}
                />
            </div>
        </div>
    </div>
  )
}
