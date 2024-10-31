let listOfNames = [];
let listOfScores = [];


function addPlayer() {
    let nameValue = document.getElementById("txtName");
    let scoreValue = document.getElementById("txtScore");
    let name = nameValue.value;
    let score = Number(scoreValue.value);
    document.getElementById("nameWarning").innerHTML = "";
    document.getElementById("scoreWarning").innerHTML = "";
    listOfNames.push(name);
    listOfScores.push(score);

    nameValue.value = "";
    scoreValue.value = "";
    nameValue.focus();
}


function listPlayers() {
    let result = ""
    for (i = 0; i < listOfNames.length; i++) {
        result += `Player ${i + 1} is ${listOfNames[i]} with ${listOfScores[i]} scores`;
        result += "</br>";
    }
    document.getElementById("pOutput").innerHTML = result;
}


function playerSearch() {
    let namePlayer = document.getElementById("playerForSearch");
    let name = namePlayer.value;
    let result = "";
    let checker = 0;
    for (i = 0; i < listOfNames.length; i++) {
        if (name == listOfNames[i]) {
            result += `Player number ${i + 1} with name "${listOfNames[i]}" has ${listOfScores[i]} scores`;
            result += "</br>";
            checker += 1;
        } 
    }
    if (checker == 0) {
            result = `Player with name "${name}" was not found in the list of players`;
        }

    document.getElementById("pOutput2").innerHTML = result;
}


function findWinner() {
    let winnerScore = listOfScores[0];
    let result = "";
    let listOfWinners = [];
    for (i = 0; i < listOfScores.length; i++) {
        if (listOfScores[i] > winnerScore) {
            winnerScore = listOfScores[i];
            listOfWinners = [];
            listOfWinners.push([(i+1), listOfNames[i], listOfScores[i]]);
        } else if (listOfScores[i] == winnerScore) {
            listOfWinners.push([(i+1), listOfNames[i], listOfScores[i]]);
        }
    }
    if (listOfWinners.length > 1) {
        result += `The first place was shared between ${listOfWinners.length} players, each of whom has ${winnerScore} scores:`;
        result += "</br>";
        for (i = 0; i < listOfWinners.length; i++) {
            result += `Player number ${listOfWinners[i][0]} with name "${listOfWinners[i][1]}"`;
            result += "</br>";
        }
    } else if (listOfWinners.length == 1) {
        result += `The winner is player number ${listOfWinners[0][0]} with name "${listOfWinners[0][1]}" and ${winnerScore} scores!`;
    }
    
    document.getElementById("pOutput3").innerHTML = result;
}