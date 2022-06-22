import { useEffect, useState } from "react";
import { getQuestion } from "../api/quizUtils";
import QuestionCard from "../components/QuestionCard";
import { QuestionType } from "../types/quizType"

const Home = () => {
    let [quizObj, setQuizObj] = useState<QuestionType[]>([]);
    let [currentStep, setCurrentStep] = useState<number>(0);
    let [score, setScore] = useState<number>(0);

    useEffect(() => {
        async function fetchData() {
            let quizData: QuestionType[] = await getQuestion(5, "easy");
            setQuizObj(quizData)
        }
        fetchData();
    }, [])

    const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();
        const currentQuestion = quizObj[currentStep];
        if (userAns === currentQuestion.answer) {
            console.log("Correct")
            setScore(++score)
            
        }
        if (currentStep !== quizObj.length - 1) {
            setCurrentStep(++currentStep);
        }
        else {
            alert("Your final score is ===> " + score + " out of " + quizObj.length);
            setCurrentStep(0);
            setScore(0)
        }
    }

    if (!quizObj.length) {
        return <h1 className="text-center mt-10 text-2xl">Loading... </h1>
    }
    return (
        <div className="flex mt-20 font-black ">
            <QuestionCard
                options={quizObj[currentStep].option}
                question={quizObj[currentStep].question}
                callback={handleSubmit}
            />

        </div>
    )
}

export default Home;