var dares_json;
var lobbyId;
var lobby;
var lobbies;

function bodyOnload() {
}


function enterLobby() {
    lobbyId = document.getElementById("lobbyId").value;
    if (lobbies != null && lobbies[lobbyId] != null) {
        lobby = lobbies[lobbyId];
        let usrIndex = 0;
        for (; usrIndex < 1000; usrIndex++) {
            if (lobby[usrIndex] == null) {
                break;
            }
        }
        if (usrIndex == 1000) {
            // console.log("Couldn't find usrIndex");
        } else { // success
            lobby[usrIndex] = {
                "dares":[],
                "points":"0"
            }
            // console.log("Found usrIndex");
            document.getElementById("lobby").style.display = "none";
            document.getElementById("dares").style.display = "block";
        }
    }
}
function submitText() {
    let playerId = document.getElementById("playerId").value;
    let textInput = document.getElementById("textInput").value;
    // Create a JSON object with player ID and submitted text
    let jsonData = {
        lobbyId: lobbyId,
        textInput: textInput
    };
    // Convert JSON object to a string
    let jsonString = JSON.stringify(jsonData);
    // Simulate sending data to a server or writing to a file
    console.log("JSON Data:", jsonString);
}
//function 