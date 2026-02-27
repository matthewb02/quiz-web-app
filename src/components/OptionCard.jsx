
import React from 'react';

const OptionCard = ({option, onClick}) => {
    return (<div>
        <button onClick={() => onClick(option)}>
            {option}
        </button>
    </div>)
}

export default OptionCard;