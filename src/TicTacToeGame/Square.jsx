import React from "react";

const Square = (props) =>{
    return (
        <div className="square" onClick={props.onclick}>
            <h1>{props.val}</h1>
        </div>
    )
}

export default Square;