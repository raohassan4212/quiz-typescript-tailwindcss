import { Quiz, QuestionType } from "../types/quizType";

const getQuestion = async (quantity: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${quantity}&difficulty=${level}&type=multiple`)
    const { results } = await res.json();
    return results
}

export {
    getQuestion
}