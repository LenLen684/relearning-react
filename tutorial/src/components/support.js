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
function TileNumber(letter){
    let tileNumber = ''
    switch(letter){
        case 'A':
            tileNumber=1
            break;
        case 'B':
            tileNumber=2
            break;
        case 'C':
            tileNumber=3
            break;
        case 'D':
            tileNumber=4
            break;
        case 'E':
            tileNumber=5
            break;
        case 'F':
            tileNumber=6
            break;
        case 'G':
            tileNumber=7
            break;
        case 'H':
            tileNumber=8
            break;
        default:
            tileNumber='Default'
    }
    return tileNumber
}

//checks if div has a piece in it
function HasPiece(tileId){
    document.getElementById(tileId).hasChildNodes()
}

//Adds class to element by Id
function AddClassToElement(tileId, className){
    document.getElementById(tileId).classList.add(className)
}

function CheckElementHasClass(elementId, className){
    return(document.getElementById(elementId).classList.contains(className))
}

/**
 * Using the id of both the parent div and the piece, you can produce movement on the board
 * @param {string} pieceId - Id of the piece to add to a tile
 * @param {string} parentId - Parent element to add the piece to
 */
function AddPieceToTile(pieceId, parentId) {
    document.getElementById(parentId).appendChild(document.getElementById(pieceId))
}

/**
 * Removes a single class from an element given an element ID
 * @param {string} tileId - ID of the element to find
 * @param {string} className - Name of the class to remove
 */
function RemoveClassFromElement(tileId, className){
    document.getElementById(tileId).classList.remove(className)
}

/**
 * Remove classes from an elements found by class name
 * @param {string} classToFind - Class of the elements to look for
 * @param {string or string[]} classesToRemove - All class names to remove
 */
function RemoveClassesFromElementsByClassName(classToFind, classesToRemove){
    const elements = document.getElementsByClassName(classToFind);
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if(Array.isArray(classesToRemove)){
            for (let j = 0; j < classesToRemove.length; j++) {
                const className = classesToRemove[j];
                element.classList.remove(className);
            }
        } else {
            element.classList.remove(classesToRemove)
        }
    }
}

export {TileLetter, AddPieceToTile, TileNumber, HasPiece, AddClassToElement, CheckElementHasClass, RemoveClassFromElement, RemoveClassesFromElementsByClassName}