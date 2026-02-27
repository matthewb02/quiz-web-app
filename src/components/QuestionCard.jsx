
import React from "react";
import DOMPurify from "dompurify";
import OptionCard from "./OptionCard.jsx";

const QuestionCard = ({question, onAnswer}) => {
    const options = [...question["incorrect_answers"], question["correct_answer"]].sort(
        (a, b) => Math.random() - 0.5
    );
    const prompt = DOMPurify.sanitize(question["question"]);
    const onAnswerSelected = (option) => {
        onAnswer(question["correct_answer"] === option)
    }

    return (
        <div>
            <h3 dangerouslySetInnerHTML={{__html: prompt}}></h3>
            {options.map((option, index) =>
                <OptionCard key={index} option={option} onClick={onAnswerSelected} />
            )}
        </div>
    );
}

export default QuestionCard;