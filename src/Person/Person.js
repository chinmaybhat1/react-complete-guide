import React from 'react';

const person = (props) => {
    return(
        <div>
            <p>I am <b>{props.name}</b> and I am <b>{props.age}</b> years old.</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;