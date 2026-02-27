
import React from 'react';
import DOMPurify from "dompurify";

const OptionCard = ({option, onClick}) => {
    return (<div>
        <button className={"answer-button"} onClick={() => onClick(option)}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(option) }} />
    </div>)
}

export default OptionCard;