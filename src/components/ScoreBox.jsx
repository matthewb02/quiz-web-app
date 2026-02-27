
import React from "react";

const ScoreBox = ({score, categoryName}) => {

    return (
        <div className={"score-container"}>Category: {categoryName}<br/>Score: {score}</div>
    );
}

export default ScoreBox;