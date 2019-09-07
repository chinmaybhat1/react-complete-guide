import React from 'react'

const UserOutput = (props) => {
    return (
        <div>
            <p>Username: {props.name}</p>
            <p>{props.name} is awesome!!</p>
        </div>
    )
}

export default UserOutput
