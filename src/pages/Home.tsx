import { useEffect, useState } from "react";
import { getQuestion } from "../api/quizUtils";
import QuestionCard from "../components/QuestionCard";
import { QuestionType } from "../types/quizType"

const Home = () => {
    let [quizObj, setQuizObj] = useState<QuestionType[]>([]);
    let [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        async function fetchData() {
            let quizData: QuestionType[] = await getQuestion(5, "easy");
            setQuizObj(quizData)
        }
        fetchData();
    }, [])

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        if (currentStep !== quizObj.length-1) {
            setCurrentStep(++currentStep)
        }
        else {
            alert("Quiz Completed")
        }
    }

    if (!quizObj.length) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="flex mt-20 ml-10 font-black">
            <QuestionCard
                options={quizObj[currentStep].option}
                question={quizObj[currentStep].question}
                callback={handleSubmit}
            />
        </div>
    )
}

export default Home;