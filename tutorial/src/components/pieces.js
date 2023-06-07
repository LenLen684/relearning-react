import React from "react"

function Piece(props){
    if(props.kind){
        let kind = props.kind+"";
        let pieceImg = (props.black && props.black == "true") ? "Black" : "White";
        switch (kind.toLowerCase()) {
            case "king":
                pieceImg += "King.png"
                break;
            case "pawn":
                pieceImg += "Pawn.png"
                break;
            case "rook":
                pieceImg += "Rook.png"
                break;
            case "knight":
                pieceImg += "Knight.png"
                break;
            case "queen":
                pieceImg += "Queen.png"
                break;
            case "bishop":
                pieceImg += "Bishop.png"
                break;
            default:
                break;
        }
        return <img src={"/assets/"+pieceImg} className="piece"></img>
    }
}

export {Piece}