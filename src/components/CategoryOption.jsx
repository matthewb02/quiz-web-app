
import React from 'react';
import DOMPurify from "dompurify";

/**
 * A button that changes the category when clicked.
 * Changing the category also refreshes the score.
 *
 * @param category the object representing the category that this button switches to
 * @param onClick the function that switches the category, takes the category object as a parameter
 * @returns {JSX.Element}
 * @constructor
 */
const CategoryOption = ({category, onClick}) => {

    // some categories have "subcategories" in the title
    // this removes subcategories from the title
    const text = category["name"].includes(":") ? category["name"].substring(category["name"].indexOf(":") + 2) : category["name"];

    return (<div>
        <button className={"category-button"} onClick={() => onClick(category)}
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>)
}

export default CategoryOption;