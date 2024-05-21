// on click of element it should be highlighted
// after an question is done the price text should be replaced with a strikethough (ideally, dissapearing would be fine too)

// add a modal element with a watcher for double jeopardy that requires input of amount wagered before continuing

// make submit players button work
const client = "controller"

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
const wsUrl = `${wsProtocol}//${wsHost}`;

let socket = new WebSocket(wsUrl);

socket.onopen = function(event) {
    console.log("[open] connection established");
    sendJSON("SYN", "");
}

socket.onmessage = function(event) {
    const eventData = JSON.parse(event.data);
    console.log(eventData)
    switch (eventData.content){
        case "SYN":
            sendJSON("ACK", "");
            break;
    }
}

let sendJSON = (content, data) => {
    socket.send(`{
        "client": "${client}",
        "content": "${content}",
        "data": "${data}"
    }`)
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
        },
        setNewQuestion: function(question, category){
            index = app._data.boardData[category].indexOf(question)
            const xmlString = `<data><category>${category}</category><index>${index}</index></data>`
            sendJSON("questionChange", xmlString);
            app._data.question.category = category;
            app._data.question.index = index;
        },
        returnToBoard: function(){
            app._data.boardData[app._data.question.category][app._data.question.index].price = null;
            app._data.question.category = null;
            app._data.question.index = null;
            sendJSON("returnToBoard", "")
        },
        submitPlayers: function(){
            player1Name = document.getElementById('player-1-name').value;
            player2Name = document.getElementById('player-2-name').value;
            player3Name = document.getElementById('player-3-name').value;

            sendJSON("submitPlayers", `<data><player1Name>${player1Name}</player1Name><player2Name>${player2Name}</player2Name><player3Name>${player3Name}</player3Name></data>`);
            console.log(app._data.players)
            app._data.players.push({"name": player1Name, "money": 0});
            app._data.players.push({"name": player2Name, "money": 0});
            app._data.players.push({"name": player3Name, "money": 0});
            console.log(app._data.players)
        },
        addMoney: function(playerIndex){
            amount = Number(document.getElementById(`money-input-box-${playerIndex}`).value);
            currentMoney = Number(app._data.players[playerIndex].money);
            total = currentMoney + amount;
            app._data.players[playerIndex].money = total;
            sendJSON("changeMoney", `<data><playerIndex>${playerIndex}</playerIndex><newMoney>${total}</newMoney></data>`)

            document.getElementById(`money-input-box-${playerIndex}`).value = "";
        },
        subtractMoney: function(playerIndex){
            amount = Number(document.getElementById(`money-input-box-${playerIndex}`).value);
            currentMoney = Number(app._data.players[playerIndex].money);
            total = currentMoney - amount;
            app._data.players[playerIndex].money = total;
            sendJSON("changeMoney", `<data><playerIndex>${playerIndex}</playerIndex><newMoney>${total}</newMoney></data>`)

            document.getElementById(`money-input-box-${playerIndex}`).value = "";
        },
        changeGameboard: function(board){
            sendJSON('changeBoard', `<data><boardName>${board}</boardName></data>`);
            this.request(board);
        },
        setFinalJeopardy: function(){
            sendJSON('finalJeopardy', '');
        },
        startGame: function(){
            sendJSON('startGame', '');
        }
    },
	data: {
		question:{
            category: null,
            index: null
        },
        players: [],
        boardData: {}
	}
})
