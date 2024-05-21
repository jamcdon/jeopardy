// sound needs to be added
// intro would be a nice to have add
// picture handling NOT DONE
// i think something else design wise but its late
const client = "board"
const parser = new DOMParser();

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
const wsUrl = `${wsProtocol}//${wsHost}`;

let socket = new WebSocket(wsUrl);

socket.onopen = function(event) {
    console.log("[open] connection established");
    sendJSON("SYN");
}

socket.onmessage = function(event) {
    const eventData = JSON.parse(event.data);
    console.log(eventData)
    let xmlString = eventData.data;
    console.log(xmlString)
    if (xmlString != ""){
        xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    }
    switch (eventData.content){
        case "SYN":
            sendJSON("ACK");
            break;
        case "questionChange":
            category = xmlDoc.getElementsByTagName('category')[0].childNodes[0].nodeValue;
            index = xmlDoc.getElementsByTagName('index')[0].childNodes[0].nodeValue;
            openModal(category, index)
            app._data.boardData[category][index].price = null
            break;
        case "returnToBoard":
            closeModal()
            break;
        case "submitPlayers":
            player1Name = xmlDoc.getElementsByTagName('player1Name')[0].childNodes[0].nodeValue;
            player2Name = xmlDoc.getElementsByTagName('player2Name')[0].childNodes[0].nodeValue;
            player3Name = xmlDoc.getElementsByTagName('player3Name')[0].childNodes[0].nodeValue;
            app._data.players.push({"name": player1Name, "money": 0});
            app._data.players.push({"name": player2Name, "money": 0});
            app._data.players.push({"name": player3Name, "money": 0});
            break;
        case "changeMoney":
            playerIndex = xmlDoc.getElementsByTagName('playerIndex')[0].childNodes[0].nodeValue;
            newMoney = xmlDoc.getElementsByTagName('newMoney')[0].childNodes[0].nodeValue;
            app._data.players[playerIndex].money = newMoney;
            break;
        case "changeBoard":
            boardName = xmlDoc.getElementsByTagName('boardName')[0].childNodes[0].nodeValue;
            app.request(boardName);
            break;
    }
}

let sendJSON = (content) => {
    socket.send(`{
        "client": "${client}",
        "content": "${content}",
        "data": ""
    }`)
}

buzzIn = (playerName) => {
	document.getElementById(`question-${playerName}`).classList.toggle('border-animate');
	setTimeout(() => {
		document.getElementById(`question-${playerName}`).classList.toggle('border-animate');
	}, 1200)
};

openModal = (category, index) => {
	document.getElementById("modal-question").innerHTML = app._data.boardData[category][index].question;
	document.getElementById('modal').classList.add('show');
};

closeModal = () => {
	document.getElementById('modal').classList.remove('show');
}
	
var app = new Vue({
	el: "#app",
    mounted:function(){
        this.request('board1')
    },
    methods:{
        request: function(route) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', `/${route}`);

            xhr.onload = function(){
                if (xhr.status === 200){
                    app._data.boardData = JSON.parse(xhr.responseText);
                }
                else{
                    console.log(xhr.status);
                }
            }
            xhr.send();
        }
    },
	data: {
		players: [],
        boardData: {}
	}
})
