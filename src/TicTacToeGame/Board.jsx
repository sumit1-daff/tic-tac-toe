import React from "react";

import Sqaure from "./Square"

const Board = () =>{
    return (
        <div className="board-container">
            <div className="board-row">
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>
            <div className="board-row">
            <Sqaure/>
            <Sqaure/>
            <Sqaure/>
            </div>
            <div className="board-row">
            <Sqaure/>
            <Sqaure/>
            <Sqaure/>
            </div>
        </div>
    )
}
export default Board;