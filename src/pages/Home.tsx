import { useEffect, useState } from "react";
import { getQuestion } from "../api/quizUtils";
import { QuestionType } from "../types/quizType"

const Home = () => {
    const [quizObj, setQuizObj] = useState<QuestionType[]>([]);
    useEffect(() => {
        async function fetchData() {
            let quizData: QuestionType[] = await getQuestion(5, "easy");
            console.log(quizData)
            setQuizObj(quizData)
            console.log(quizObj);
        }
        fetchData();
    }, [])
    return (
        <div className="flex justify-center mt-20 font-black text-5xl">
            <p>Quiz App </p>
        </div>
    )
}

export default Home;