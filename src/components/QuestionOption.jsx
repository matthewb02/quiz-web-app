
import React from 'react';
import DOMPurify from "dompurify";

/**
 * A button that selects an option for a question.
 *
 * @param option
 * @param onClick
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionOption = ({option, onClick}) => {
    return (
        <button className={"answer-button"} onClick={() => onClick(option)}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(option) }} />
    )
}

export default QuestionOption;