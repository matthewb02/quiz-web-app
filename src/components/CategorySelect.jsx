
import React from "react";
import CategoryOption from "./CategoryOption.jsx";

/**
 * A sidebar containing buttons to change the category.
 *
 * @param categories array of category objects {id:number, name:string}
 * @param onSelect function called by contained buttons when clicked, should take a category object as a parameter
 * @returns {JSX.Element}
 * @constructor
 */
const QuestionCard = ({categories, onSelect}) => {

    return (
        <div className="category-select">
            <h3>Categories</h3>
            {categories ? categories.map((cat, index) =>
                <CategoryOption key={index} category={cat} onClick={onSelect} />
            ) : null}
        </div>
    );
}

export default QuestionCard;