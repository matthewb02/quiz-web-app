
import React from 'react';
import DOMPurify from "dompurify";

const CategoryOption = ({category, onClick}) => {

    const text = category["name"].includes(":") ? category["name"].substring(category["name"].indexOf(":") + 2) : category["name"];

    return (<div>
        <button className={"category-button"} onClick={() => onClick(category)}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>)
}

export default CategoryOption;