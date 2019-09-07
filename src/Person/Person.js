import React from 'react';

const person = (props) => {
    return(
        <div>
            <p onClick={props.click}>I am <b>{props.name}</b> and I am <b>{props.age}</b> years old.</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed}/>
        </div>
    );
}

export default person;