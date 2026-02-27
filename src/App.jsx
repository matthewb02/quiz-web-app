
import React, {useEffect, useState} from 'react';
import OptionCard from "./components/OptionCard.jsx";
import QuestionCard from "./components/QuestionCard.jsx";

const triviaAPI = "https://opentdb.com/api.php?amount=10";

const App = (props) => {

    const [questions, setQuestions] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetch(triviaAPI).then(response => {
            response.json().then((data) => {
                console.log(data);
                if (data["response_code"] === 0) {
                    setQuestions(data["results"]);
                }
            });
        });
    });

    const nextQuestion = (isCorrect) => {
        setCurrentQuestion(currentQuestion + 1)
        if (isCorrect) {
            setScore(score + 1);
        }
    }

    return (
        <div>
            Score: {score}
            <br/>
            {questions ? <QuestionCard question={questions[currentQuestion]} onAnswer={nextQuestion}/> : null}
        </div>
    );
};

export default App;
