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
let gameState = {'turns' : -1, 'over' : false, 'p1win' : false, 'p2win' : false};

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

function dropPiece(player, column)
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
                connectBoard[column][i] = player;
                //checkWin() when implemented
                return true;
            }
        }
        return false;
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
}