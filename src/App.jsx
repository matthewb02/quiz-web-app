
import React, {useEffect} from 'react';

const triviaAPI = "https://opentdb.com/api.php?amount=10";

const App = (props) => {

    useEffect(() => {
        fetch(triviaAPI).then(response => console.log(response.json()));
    });

    return (
        <div>
        </div>
    );
};

export default App;
