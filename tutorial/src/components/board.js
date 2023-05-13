import React from "react"

function Tile(props){
    if(props.light == "true"){
        return(
            <div className = "tile light">
            </div>
        )
    }
    return(
        <div class = "tile">
        </div>
    )
}

function BlankBoard(){
// A chess board is an 8 x 8 board with alternating colors with A1 being a dark tile
    let boardArr = [];
    for (let i = 0; i < 8; i++) {
        let row = []
        for (let j = 0; j < 8; j++) {
            // Can be condensed into a ternary
            let tile = <Tile light = "true"/>;
            if((j + i) % 2) {
                tile = <Tile light="false"/>;
            }

            row.push(tile);
        }
        boardArr.push(<div class = {"row"+(8-i)}>{row}</div>)
    }
    return <div id = "board"> {boardArr} </div>;
}

export {BlankBoard};