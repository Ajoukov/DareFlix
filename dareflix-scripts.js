function enterGame() {
    var playerId = document.getElementById("playerId").value;
    // You can perform additional logic here, such as checking the ID's validity
    document.getElementById("lobby").style.display = "block";
}
function submitText() {
    var playerId = document.getElementById("playerId").value;
    var textInput = document.getElementById("textInput").value;
    // Create a JSON object with player ID and submitted text
    var jsonData = {
        playerId: playerId,
        textInput: textInput
    };
    // Convert JSON object to a string
    var jsonString = JSON.stringify(jsonData);
    // Simulate sending data to a server or writing to a file
    console.log("JSON Data:", jsonString);
    // You can send the JSON data to a server using AJAX or fetch API
    // Example:
    // fetch('your-server-endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: jsonString,
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch(error => console.error('Error:', error));
}