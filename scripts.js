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
    lobbyId = document.getElementById("lobbyId").value;
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
    let xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhr.onstatechange = function () {
        alert("DONE");
    }
    xhr.open('POST', '/json_handler', true);
    xhr.send(lobbies);
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


function Pinger_ping(ip, callback) {

  if(!this.inUse) {

    this.inUse = true;
    this.callback = callback
    this.ip = ip;

    var _that = this;

    this.img = new Image();

    this.img.onload = function() {alert("b");};
    this.img.onerror = function() {alert("a");};

    this.start = new Date().getTime();
    this.img.src = "http://" + ip;
    this.timer = setTimeout(function() {alert("c");}, 1500);

  }
}

function get() {
    let xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
    xhr.onstatechange = function () {
        alert("DONE");
    }
    xhr.open('GET', 'https:///home/ubuntu/file.txt', true);
    xhr.send("A");
}
/*
var options = {
    files: [
        // You can specify up to 100 files.
        {'url': '...', 'filename': '...'},
        {'url': '...', 'filename': '...'},
        // ...
    ],

    // Success is called once all files have been successfully added to the user's
    // Dropbox, although they may not have synced to the user's devices yet.
    success: function () {
        // Indicate to the user that the files have been saved.
        alert("Success! Files saved to your Dropbox.");
    },

    // Progress is called periodically to update the application on the progress
    // of the user's downloads. The value passed to this callback is a float
    // between 0 and 1. The progress callback is guaranteed to be called at least
    // once with the value 1.
    progress: function (progress) {},

    // Cancel is called if the user presses the Cancel button or closes the Saver.
    cancel: function () {},

    // Error is called in the event of an unexpected response from the server
    // hosting the files, such as not being able to find a file. This callback is
    // also called if there is an error on Dropbox or if the user is over quota.
    error: function (errorMessage) {}
};*/

function dropbox_save() {
    var dbx = new Dropbox.Dropbox({accessToken: 'f91ef1yhkiu9qcn'});
    var client = new Dropbox.Client({ key: 'f91ef1yhkiu9qcn' });
    client.authenticate(function () {
        client.writeFile('hello.txt', 'Hello, World!', function () {
            alert('File written!');
        });
    });
}