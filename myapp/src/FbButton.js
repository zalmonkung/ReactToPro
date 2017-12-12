import React from 'react'

const FbButton = (props) => {
    return(
        <button onClick={props.handleClick}>{props.caption}</button>
    )
}

export default FbButton