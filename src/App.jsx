
import "./layout.css"
import React, {useEffect, useState} from 'react';
import QuestionCard from "./components/QuestionCard.jsx";
import ScoreBox from "./components/ScoreBox.jsx";
import CategorySelect from "./components/CategorySelect.jsx";

const triviaAPI = "https://opentdb.com/api.php?amount=10";
const triviaAPICategories = "https://opentdb.com/api_category.php"

const App = (props) => {

    const [questions, setQuestions] = useState(null);
    const [categories, setCategories] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (questions === null) {
            fetch(triviaAPI).then(response => {
                response.json().then((data) => {
                    console.log(data);
                    if (data["response_code"] === 0) {
                        setQuestions(data["results"]);
                    }
                });
            });
        }
        if (categories === null) {
            fetch(triviaAPICategories).then(response => {
                response.json().then((data) => {
                    console.log(data);
                    setCategories(data["trivia_categories"]);
                });
            });
        }
    });

    const nextQuestion = (isCorrect) => {
        setCurrentQuestion(currentQuestion + 1)
        if (isCorrect) {
            setScore(score + 1);
        }
    }

    return (
        <div className="app">
            <CategorySelect categories={categories} />
            <div className="quiz-container">
                <ScoreBox score={score}/>
                {questions ? <QuestionCard question={questions[currentQuestion]} onAnswer={nextQuestion}/> : null}
            </div>
        </div>
    );
};

export default App;
