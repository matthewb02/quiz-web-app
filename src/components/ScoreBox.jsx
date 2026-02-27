
import React from "react";

const ScoreBox = ({score, categoryName, totalAnswers}) => {

    return (
        <div className={"score-container"}>Category: {categoryName}<br/>Score: {score} / {totalAnswers}</div>
    );
}

export default ScoreBox;