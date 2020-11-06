let curPlayer = 1;
let connectBoard = [
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' ']
];
let gameState = {'turns' : -1, 'over' : false};

function swapTurn()
{
    if(curPlayer == 1)
    {
        curPlayer = 2;
    }
    else
    {
        curPlayer = 1;
    }
}

function dropPiece(piece, column)
{
    if(column > 6 || column < 0)
    {
        return false;
    }
    else
    {
        for(let i = 0; i < 6; i++)
        {
            if(connectBoard[column][i] == ' ')
            {
                connectBoard[column][i] = piece;
                checkWin(piece, column, i);
                return true;
            }
        }
        return false;
    }
}

function horizontalCheck(piece, column, row)
{
    let numInRow = 1;
    for(let i = column - 1; i >= 0; i--)
    {
        if(connectBoard[i][row] != piece)
        {
            break;
        }
        numInRow++;
    }
    for(let i = column + 1; i < 7; i++)
    {
        if(connectBoard[i][row] != piece)
        {
            break;
        }
        numInRow++;
    }
    if(numInRow >= 4)
    {
        gameState.over = true;
    }
}

function verticalCheck(piece, column, row)
{
    numInRow = 1;
    for(let i = row - 1; i >= 0; i--)
    {
        if(connectBoard[column][i] != piece)
        {
           break; 
        }
        numInRow++;
    }
    for(let i = row + 1; i < 6; i++)
    {
        if(connectBoard[column][i] != piece)
        {
            break;
        }
        numInRow++;
    }
    if(numInRow >= 4)
    {
        gameState.over = true;
    }
}

function diagUpLeftCheck(piece, column, row)
{
    numInRow = 1;
    let counter = 1;
    while((column + counter < 7) && (row - counter >= 0))
    {
        if(connectBoard[column + counter][row - counter] != piece)
        {
            break;
        }
        numInRow++;
        counter++;
    }
    counter = 1;
    while((column - counter >= 0) && (row + counter < 6))
    {
        if(connectBoard[column - counter][row + counter] != piece)
        {
            break;
        }
        numInRow++;
        counter++;
    }
    if(numInRow >= 4)
    {
        gameState.over = true;
    }
}

function diagUpRightCheck(piece, column, row)
{
    numInRow = 1;
    counter = 1;
    while((column - counter >= 0) && (row - counter >= 0))
    {
        if(connectBoard[column - counter][row - counter] != piece)
        {
            break;
        }
        numInRow++;
        counter++;
    }
    counter = 1;
    while((column + counter < 7) && (row + counter < 6))
    {
        if(connectBoard[column + counter][row + counter] != piece)
        {
            break;
        }
        numInRow++;
        counter++;
    }
    if(numInRow >= 4)
    {
        gameState.over = true;
    }
}

let checks = [horizontalCheck, verticalCheck, diagUpLeftCheck, diagUpRightCheck];

function checkWin(piece, column, row)
{
    for(let i = 0; i < 4; i++)
    {
        checks[i](piece, column, row);
        if(gameState.over)
        {
            return;
        }
    }
}

function playerTurn()
{
    if(!gameState.over)
    {
        let piecePlaced = false;
        let response = document.getElementById("input").value;
        response = Number(response) - 1;
        piecePlaced = dropPiece(curPlayer, response);
        if(piecePlaced)
        {
            if(gameState.over)
            {
                if(curPlayer == 1)
                {
                    document.getElementById("turn").innerHTML = "Player 1 (Red), you win!";
                }
                else
                {
                    document.getElementById("turn").innerHTML = "Player 2 (Blue), you win!";
                }
                document.getElementById("inputField").style.display = "none";
            }
            else
            {
                swapTurn();
                if(curPlayer == 1)
                {
                    document.getElementById("turn").innerHTML = "Player 1 (Red), your turn!";
                }
                else
                {
                    document.getElementById("turn").innerHTML = "Player 2 (Blue), your turn!";
                }
            }
        }
        updateBoard();
    }
}

function updateBoard()
{
    let tableString = "";
    for(let i = 5; i >= 0; i--)
    {
        tableString += "<tr>";
        for(let j = 0; j < 7; j++)
        {
            if(connectBoard[j][i] == "1")
            {
                tableString += "<td class=player1>O</td>";
            }
            else if(connectBoard[j][i] == "2")
            {
                tableString += "<td class=player2>O</td>";
            }
            else
            {
                tableString += "<td></td>";
            }
        }
        tableString += "</tr>";
    }
    document.getElementById("board").innerHTML = tableString;
}

function setGame()
{
    updateBoard();
    document.getElementById("turn").innerHTML = "Player 1 (Red), your turn!";
}

function resetGame()
{
    curPlayer = 1;
    connectBoard = [
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' '],
    [' ', ' ', ' ',' ',' ',' ']
    ];
    gameState = {'turns' : -1, 'over' : false, 'p1win' : false, 'p2win' : false};
    updateBoard();
    document.getElementById("turn").innerHTML = "Player 1 (Red), your turn!";
    document.getElementById("inputField").style.display = "block";
}