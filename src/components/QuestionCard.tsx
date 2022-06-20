import React from "react";
import { questionPropType } from "../types/quizType";

const QuestionCard: React.FC<questionPropType> = ({ options, question, callback }) => {
    console.log(question)
    return (
        <div>
            <p>{question}</p>
            <form onSubmit={callback}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input
                                        type="radio"
                                        name="option"
                                        value={opt}
                                    />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <input type="submit" className="border-2 px-2 py-1 text-center rounded border-black"/>
            </form>
        </div>
    )
}

export default QuestionCard;