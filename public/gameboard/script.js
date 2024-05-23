// sound needs to be added
// add final jeopardy
const client = "board"
const parser = new DOMParser();

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
const wsUrl = `${wsProtocol}//${wsHost}`;

let socket = new WebSocket(wsUrl);

socket.onopen = function(event) {
    console.log("[open] connection established");
    sendJSON("SYN");
    startHeartbeat();
}

socket.onmessage = function(event) {
    const eventData = JSON.parse(event.data);
    console.log(eventData)
    let xmlString = eventData.data;
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
        case "startGame":
            introImage = document.getElementById('intro-image');
            introImage.innerHTML = "";
            introImage.classList = "d-none"
            break;
        case "finalJeopardy":
            category = xmlDoc.getElementsByTagName('category')[0].childNodes[0].nodeValue;
            finalJeopardyModal(category)
            break;
        case "finalJeopardypt2":
            question = xmlDoc.getElementsByTagName('question')[0].childNodes[0].nodeValue;
            finalJeopardyModal(question)
            break;
        case "finalJeopardyMusic":
            document.getElementById('final-jeopardy-music').play();
            break;
    }
}

socket.onclose = function(event) {
    console.log("[close] connection closed");
    stopHeartbeat();
}

socket.onerror = function(error) {
    console.log(`[error] ${error.message}`)
}

let hearbeatInterval;
const startHeartbeat = () => {
    hearbeatInterval = setInterval(() => {
        if (socket.readyState === WebSocket.OPEN){
            sendJSON("PING", "")
        }
    }, 10000)
}

const stopHeartbeat = () => {
    clearInterval(hearbeatInterval)
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
    if (app._data.boardData[category][index].doubleJeopardy == true){
        document.getElementById("modal-question").innerHTML = `<img class="img-fluid" src="/img/Daily_Double.webp"/>`;
        document.getElementById('daily-double-sound').play();

        app._data.boardData[category][index].doubleJeopardy = false;
    }
    else {
        if (app._data.boardData[category][index].picture == null){
            document.getElementById("modal-question").innerHTML = app._data.boardData[category][index].question;
        }
        else {
            modalQuestion = document.getElementById("modal-question");
            modalQuestion.classList.remove('modal-content')
            modalQuestion.classList.add('modal-content-image');
            modalQuestion.innerHTML = `<div class="d-flex"><div>${app._data.boardData[category][index].question}</div><div><img class="img-fluid" src="/img/${app._data.boardData[category][index].picture}"/></div></div>`;
        }
    }
	document.getElementById('modal').classList.add('show');
};

closeModal = () => {
    document.getElementById("modal-question").classList.remove('modal-content-image');
    document.getElementById("modal-question").classList.add('modal-content');
	document.getElementById('modal').classList.remove('show');
}

finalJeopardyModal = (content) => {
    document.getElementById("modal-question").innerHTML = content;
	document.getElementById('modal').classList.add('show');
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
        boardData: {},
	}
})
