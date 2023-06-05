import React from "react"

function Tile(props){
    if(props.light == "true"){
        return(
            <div className = "tile light" id={props.id}>
            </div>
        )
    }
    return(
        <div class = "tile" id={props.id}>
        </div>
    )
}

function Board(props){
// A chess board is an 8 x 8 board with alternating colors with A1 being a dark tile
    let boardArr = [];
    // If the board is white, top down the rows should go 8-1, otherwise it should go 1-8
    for (let i = 0; i < 8; i++) {
        let row = []
        for (let j = 0; j < 8; j++) {
            let tileId = (8-i)+TileLetter(j)

            // Create the checkerboard effect by checking row num and alternate
            let tile = ((j + i) % 2) ? <Tile light = "false" id = {tileId}/> : <Tile light = "true" id = {tileId}/>;
            row.push(tile);
        }
        boardArr.push(<div id = {"row"+(8-i)} class='row'>{row}</div>)
    }
    return <div id = "board"> {boardArr} </div>;
}

// Using a switch, get the tile letter
function TileLetter(num){
    let tileLetter = ''
    switch(num){
        case 0:
            tileLetter='A'
            break;
        case 1:
            tileLetter='B'
            break;
        case 2:
            tileLetter='C'
            break;
        case 3:
            tileLetter='D'
            break;
        case 4:
            tileLetter='E'
            break;
        case 5:
            tileLetter='F'
            break;
        case 6:
            tileLetter='G'
            break;
        case 7:
            tileLetter='H'
            break;
        default:
            tileLetter='Default'
    }
    return tileLetter
}

export {Board};