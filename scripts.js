var dares_json;
var lobbyId;
var lobby;
var lobbies;
var usrIndex;

function bodyOnload() {
    // lobbyId = 0;
    // enterLobby();
    // return false;
}

function bodyOnloadAdmin() {
    loadMovies();
}

function enterLobby() {
    // lobbyId = document.getElementById("lobbyId").value;
    lobbyId = "W97BA8";
    if (lobbies == null || lobbies[lobbyId] == null) {
        invalidLobby();
        return false;
    }

    lobby = lobbies[lobbyId];
    usrIndex = 0;
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
        switchToDares();
    }
    return false;
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
function switchToDares() {
    document.getElementById("lobby").style.display = "none";
    genDares();
}

function genDares() {
    document.getElementById("dares").style.display = "block";
    addDareLine();
}
function addDareLine() {
    let daresDiv = document.getElementById("daresDiv");
    let dareLine = daresDiv.appendChild(document.createElement("div"));
    dareLine.className = "dareLine";
    dareText = dareLine.appendChild(document.createElement("input"));
    dareText.type = "text";
    dareText.className = "dareText";
    dareText.placeholder = "Enter dare here";
    dareAdd = dareLine.appendChild(document.createElement("button"));
    dareAdd.className = "dareAdd";
    dareAdd.innerText = "Add";
    let index = daresDiv.children.length;
    dareAdd.onclick = function () {addDare(this, index);};
}

function addDare(addButton, index) {
    lobby[usrIndex]["dares"][index] = addButton.parentNode.children[0].value;
    addButton.innerText = "Update";
}

function submitDares() {
    // let xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    // xhr.onstatechange = function () {
    //     alert("DONE");
    // }
    // xhr.open('POST', '/json_handler', true);
    // xhr.send(lobbies);
    document.getElementById("dares").style.display="none";
    document.getElementById("done").style.display="block";

}

function invalidLobby() {
    document.getElementById("invalidLobby").style.display="inline";
}

function autocompleteMovies() {
    const input = document.getElementById("movieInput");
    const iconsContainer = document.getElementById("icons-container");
    iconsContainer.innerHTML = "";
    const inputValue = input.value.toLowerCase();
    const filteredMovies = movieData.filter(movie => movie["Name"].toLowerCase().includes(inputValue));
    filteredMovies.forEach(movie => {
        const suggestion = document.createElement("div");
        suggestion.textContent = movie["Name"];
        suggestion.addEventListener("click", () => {
            input.value = movie["Name"];
            iconsContainer.innerHTML = "";
        });
        iconsContainer.appendChild(suggestion);
    });
}

function autocompleteWords() {
    const input = document.getElementById("movieInputWords");
    const iconsContainer = document.getElementById("icons-container-words");
    iconsContainer.innerHTML = "";
    const inputValue = input.value.toLowerCase();
    const filteredMovies = wordsData.filter(movie => movie["Name"].toLowerCase().includes(inputValue));
    filteredMovies.forEach(movie => {
        const suggestion = document.createElement("div");
        suggestion.textContent = movie["Name"];
        suggestion.addEventListener("click", () => {
            input.value = movie["Name"];
            iconsContainer.innerHTML = "";
        });
        iconsContainer.appendChild(suggestion);
    });
}

function handleSpace(event) {
    if (event.key === " ") {
        // Add your icon implementation here
        const iconsContainer = document.getElementById("icons-container");
        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.textContent = "🎬"; // Placeholder icon, replace as needed
        iconsContainer.appendChild(icon);
    }
}
function handleSpaceWords(event) {
    if (event.key === " ") {
        // Add your icon implementation here
        const iconsContainer = document.getElementById("icons-container-words");
        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.textContent = "🎬"; // Placeholder icon, replace as needed
        iconsContainer.appendChild(icon);
    }
}

function changeToMoviePick() {
    document.getElementById("id_giver").style.display="none";
    document.getElementById("autocomplete-container").style.display="block";
}

function changeToWordsSelector() {
    document.getElementById("autocomplete-container").style.display="none";
    document.getElementById("autocomplete-container-words").style.display="block";
}

function changeToMovieViewer() {
    let temp = document.createElement("a");
    temp.href = "player.html";
    temp.click();
}

function something() {
    playVideo();
    pauseAtSpecificTime();
}
