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

function changeToMoviePick() {
    document.getElementById("id_giver").style.display="none";
    document.getElementById("autocomplete-container").style.display="block";
}

function changeToMovieViewer() {
    let temp = document.createElement("a");
    temp.href = "player.html";
    temp.click();
    // document.getElementById("autocomplete-container").style.display="none";
    // document.getElementById("movieViewer").style.display="block";
}




//keyWord = "drive"; 
//keyFrequency = 6; 
let keyTimestamps = [1124, 1294, 2304, 3174, 3358, 4382];
// Pause the video
function pauseVideo() {
    video.pause();
}
// Play the video
function playVideo() {
    video.play();
}
// Open a new pop-up window
// Function to handle timeupdate event and pause the video at specified times

let pauseTimes = keyTimestamps;
let index = 0;
let listOfDares =  ["Send a random compliment to the third person in your contact list.", "Go outside to west dining and shout a funny phrase loudly.",
"FaceTime or call someone of the opposite sex and sing \"Happy Birthday\" to them, regardless of whether it's their birthday or not.",
"Eat a hot pepper or spicy food item and try not to drink anything for the next 5 minutes.",
"Call a crush and confess a fake secret admirer story", "Dress up in a silly costume, grab a random object, and give a two-minute performance. Have your friends record it!"];
function pauseAtSpecificTime() {
    let currentTime = video.currentTime;
    console.log(currentTime);
    if (currentTime >= pauseTimes[index]) {
        video.pause();
        let darePopup = window.open("darePopup.html", 'Dare Popup', 'width=600,height=400');
        let finishedButton;
        darePopup.onload = function () {
            darePopup.document.getElementById("dare").innerHTML = listOfDares[index];
            finishedButton = darePopup.document.querySelector("button");
            finishedButton.addEventListener("click", function () {
                darePopup.close();
                video.play();
                index++;
                pauseAtSpecificTime();
            });
        
        };
    } else {
        setTimeout(pauseAtSpecificTime, 200);
    }
}

var video;
function body2onload() {
    video = document.getElementById("myVideo");
    video.onloadeddata = setTimeout(something, 200);
}

function something() {
    playVideo();
    pauseAtSpecificTime();
}