import { Answer } from "./Answer"
import { Question } from "./Question"
import { ScoreCard } from "./ScoreCard"

export const DoCalGoResponsive = () => {
  return (
    <div>
        <ScoreCard correct={0} incorrect={0} />
        <div className="p-10">
            <Question number1={1} operation="+" number2={1} />
            <Answer />
        </div>
    </div>
  )
}
