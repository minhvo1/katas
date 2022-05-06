const generateBoard = function (whiteQueen, blackQueen) {
    let board = [];
    
    for (let i = 0; i < 8; i++) {
        let boardRow = [];
        for (let j = 0; j < 8; j++) {
            if((i === whiteQueen[0] && j === whiteQueen [1]) || (i === blackQueen[0] && j === blackQueen [1])) {
                boardRow.push(1);
            }
            else {
                boardRow.push(0);
            }
        }
        board.push(boardRow);
        console.log("\n")
    }
    return board;
};

const queenThreat = function(generatedBoard) {
    let posOne = [];
    let posTwo = [];
    
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (generatedBoard[i][j] === 1) {
                posOne[0] = i;
                posOne[1] = j;
                generatedBoard[i][j] = 0;
                
                break;
            }
        }
        if (posOne.length != 0) {
            break;
        }
    }
    for (let i = 0; i < 8; i++) {
       for (let j = 0; j < 8; j++) {
           if (generatedBoard[i][j] === 1) {
               posTwo[0] = i;
               posTwo[1] = j;
               break;
           }
       }
    }

    if ((posOne[0] === posTwo[0]) || (posOne[1] === posTwo[1]) || (Math.abs(posOne[0] - posOne[1]) === Math.abs(posTwo[0] - posTwo[1]))) {
        return true;
    }
    else {
        return false;
    }
    
}

let whiteQueen = [0, 5];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));