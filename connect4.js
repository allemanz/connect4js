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