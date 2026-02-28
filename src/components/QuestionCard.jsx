
import React from "react";
import DOMPurify from "dompurify";
import QuestionOption from "./QuestionOption.jsx";

/**
 * Represents the quiz, displays a question and offers choices.
 *
 * @param question text to be displayed as the question's prompt
 * @param onAnswer
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionCard = ({question, onAnswer}) => {
    const options = [...question["incorrect_answers"], question["correct_answer"]].sort(
        (a, b) => Math.random() - 0.5
    );
    const prompt = DOMPurify.sanitize(question["question"]);
    const onAnswerSelected = (option) => {
        onAnswer(question["correct_answer"] === option)
    }

    return (
        <div className="question-card">
            <h3 dangerouslySetInnerHTML={{__html: prompt}}></h3>
            {options.map((option, index) =>
                <QuestionOption key={index} option={option} onClick={onAnswerSelected} />
            )}
        </div>
    );
}

export default QuestionCard;