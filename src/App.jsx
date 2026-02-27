
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
    const [currentCategory, setCurrentCategory] = useState({"name": "Any"});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    let lastQuery = null;

    const refreshQuestions = () => {

        const query = currentCategory["id"] ? triviaAPI + "&category=" + currentCategory["id"] : triviaAPI;

        if (lastQuery === null || Date.now() > lastQuery + 2500) {
            lastQuery = Date.now();
            fetch(query).then(response => {
                response.json().then((data) => {
                    console.log(data);
                    if (data["response_code"] === 0) {
                        setQuestions(data["results"]);
                        setCurrentQuestion(0);
                    } else {
                        setQuestions(null);
                    }
                });
            });
        }
    }

    useEffect(() => {
        if (questions === null) {
            refreshQuestions();
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
        if (currentQuestion >= questions.length) {
            refreshQuestions();
        }
        if (isCorrect) {
            setScore(score + 1);
        }
    }

    const nextQuiz = (newCategory) => {
        setCurrentCategory(newCategory);
        refreshQuestions();
        setScore(0);
    }

    return (
        <div className="app">
            <CategorySelect categories={categories} onSelect={nextQuiz} />
            <div className="quiz-container">
                <ScoreBox score={score} categoryName={currentCategory["name"]} />
                {questions ? <QuestionCard question={questions[currentQuestion]} onAnswer={nextQuestion}/> : "Please wait a few seconds and refresh the page or try again."}
            </div>
        </div>
    );
};

export default App;
