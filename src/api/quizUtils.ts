import { Quiz, QuestionType } from "../types/quizType";

const suffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)

const getQuestion = async (quantity: number, level: string): Promise<QuestionType[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${quantity}&difficulty=${level}&type=multiple`)
    const { results } = await res.json();
    const quiz: QuestionType[] = results.map((quizObject: Quiz) => {
        return {
            question: quizObject.question,
            answer: quizObject.correct_answer,
            option: suffleArray(quizObject.incorrect_answers.concat(quizObject.correct_answer))
        }
    })
    return quiz
}

export {
    getQuestion
}