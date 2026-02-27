
import React from 'react';
import DOMPurify from "dompurify";

const QuestionOption = ({option, onClick}) => {
    return (
        <button className={"answer-button"} onClick={() => onClick(option)}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(option) }} />
    )
}

export default QuestionOption;