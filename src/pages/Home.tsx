import { useEffect } from "react";
import { getQuestion } from "../api/quizUtils";

const Home = () => {
    useEffect(() => {
        async function fetchData() {
            let data = await getQuestion(5, "easy");
            console.log(data);
        }
        fetchData();
    }, [])
    return (
        <div className="flex justify-center mt-20 font-black text-5xl">
            <p>Quiz App</p>
        </div>
    )
}

export default Home;