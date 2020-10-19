function updateBoard()
{
    let tableString = "";
    for(let i = 0; i < 6; i++)
    {
        tableString += "<tr>";
        for(let i = 0; i < 7; i++)
        {
            tableString += "<td></td>";
        }
        tableString += "</tr>";
    }
    document.getElementById("board").innerHTML = tableString;
}

function setGame()
{
    updateBoard();
}