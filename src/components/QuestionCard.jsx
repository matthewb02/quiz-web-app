
import React from "react";
import DOMPurify from "dompurify";
import OptionCard from "./OptionCard.jsx";

const QuestionCard = ({question}) => {

    const options = [...question["incorrect_answers"], question["correct_answer"]];
    const prompt = DOMPurify.sanitize(question["question"].includes("<") ? "" : question["question"]);

    return (
        <div>
            <h3 dangerouslySetInnerHTML={{__html: prompt}}></h3>
            {options.map((option, index) => <OptionCard key={index} option={option}/>)}
        </div>
    );
}

export default QuestionCard;