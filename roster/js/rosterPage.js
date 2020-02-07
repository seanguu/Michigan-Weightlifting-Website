document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        generateRoster();
    }
});

function generateRoster() {
    generateMensRoster();
    generateWomensRoster();
}

function generateMensRoster() {
    var mensRosterCopy = mensRoster;
    var rowIndex = 0;

    var finalRoster = '';
    var currentRow = '<div class ="row">';

    for (currentRosterIndex = 0; currentRosterIndex < mensRosterCopy.length; ++currentRosterIndex) {
        if (rowIndex == 3) {
            rowIndex = 0;
            currentRow += '</div>';
            finalRoster += currentRow;
            currentRow = '<div class ="row">';
        }
        currentRow = currentRow + '<div class="rosterColumn"> <div class="card"> <img src="'
        + mensRosterCopy[currentRosterIndex].imageLink + '" alt="' + mensRosterCopy[currentRosterIndex].firstName + '" style="width:100%">'
        + '<div class="rosterEntry">'
        + '<h2>' + mensRosterCopy[currentRosterIndex].firstName + ' ' + mensRosterCopy[currentRosterIndex].lastName + '</h2>'
        + '<p class="athleteInfo">Major</p>'
        + '<p>' + mensRosterCopy[currentRosterIndex].major + '</p>'
        + '<p class="athleteInfo">Height</p>'
        + '<p>' + mensRosterCopy[currentRosterIndex].height + '</p>'
        + '<p class="athleteInfo">Weight Class</p>'
        + '<p>' + mensRosterCopy[currentRosterIndex].weightClass + '</p>'
        +  '<p class="athleteInfo">Hometown</p>'
        + '<p>' + mensRosterCopy[currentRosterIndex].hometown + '</p>'
        + '</div> </div> </div>';
        rowIndex += 1;
    }
    currentRow += '</div>';
    finalRoster += currentRow;
    document.getElementById("mensRoster").innerHTML = finalRoster;
}

function generateWomensRoster() {
    var womensRosterCopy = womensRoster;
    var rowIndex = 0;

    var finalRoster = '';
    var currentRow = '<div class ="row">';

    for (currentRosterIndex = 0; currentRosterIndex < womensRosterCopy.length; ++currentRosterIndex) {
        if (rowIndex == 3) {
            rowIndex = 0;
            currentRow += '</div>';
            finalRoster += currentRow;
            currentRow = '<div class ="row">';
        }
        currentRow = currentRow + '<div class="rosterColumn"> <div class="card"> <img src="'
        + womensRosterCopy[currentRosterIndex].imageLink + '" alt="' + womensRosterCopy[currentRosterIndex].firstName + '" style="width:100%">'
        + '<div class="rosterEntry">'
        + '<h2>' + womensRosterCopy[currentRosterIndex].firstName + ' ' + womensRosterCopy[currentRosterIndex].lastName + '</h2>'
        + '<p class="athleteInfo">Major</p>'
        + '<p>' + womensRosterCopy[currentRosterIndex].major + '</p>'
        + '<p class="athleteInfo">Height</p>'
        + '<p>' + womensRosterCopy[currentRosterIndex].height + '</p>'
        + '<p class="athleteInfo">Weight Class</p>'
        + '<p>' + womensRosterCopy[currentRosterIndex].weightClass + '</p>'
        +  '<p class="athleteInfo">Hometown</p>'
        + '<p>' + womensRosterCopy[currentRosterIndex].hometown + '</p>'
        + '</div> </div> </div>';
        rowIndex += 1;
    }
    currentRow += '</div>';
    finalRoster += currentRow;
    document.getElementById("womensRoster").innerHTML = finalRoster;
}