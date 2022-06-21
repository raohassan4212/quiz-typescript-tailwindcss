import React, { FormEvent, useState } from "react";
import { questionPropType } from "../types/quizType";

const QuestionCard: React.FC<questionPropType> = ({ options, question, callback }) => {
    let [selectedAns, setSelectedAns] = useState<string>("");
    const handleSelection = (e: any) => {
        setSelectedAns(e.target.value);
    }
    return (
        <div className="w-full">
            <h1 className="text-center w-full mb-5">Quiz App</h1>
            <p className="text-amber-800">{question}</p>
            <form onSubmit={(e: FormEvent<EventTarget>) => callback(e,selectedAns)}>
                {
                    options.map((opt: string, ind: number) => {
                        return (
                            <div className="m-5" key={ind}>
                                <label>
                                    <input
                                    className="mr-2"
                                        type="radio"
                                        name="option"
                                        value={opt}
                                        required
                                        checked={selectedAns === opt}
                                        onChange={handleSelection}
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