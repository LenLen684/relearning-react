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

//Using the letter, return the corresponding number

//Using the id of both the parent div and the piece, you can produce movement on the board
function AddPieceToTile(pieceId, parentId) {
    document.getElementById(parentId).appendChild(document.getElementById(pieceId))
}

export {TileLetter, AddPieceToTile}