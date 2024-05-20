// sound needs to be added
// intro would be a nice to have add
// picture handling NOT DONE
// i think something else design wise but its late
const client = "board"

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
const wsUrl = `${wsProtocol}//${wsHost}`;

let socket = new WebSocket(wsUrl);

socket.onopen = function(event) {
    console.log("[open] connection established");
    sendJSON("SYN");
}

socket.onmessage = function(event) {
    console.log(event.data);
    switch (event.data.content){
        case "SYN":
            sendJSON("ACK");
            break;
    }
}

let sendJSON = (content) => {
    socket.send(`{
        "client": "${client}",
        "content": "${content}"
    }`)
}

buzzIn = (playerName) => {
	document.getElementById(`question-${playerName}`).classList.toggle('border-animate');
	setTimeout(() => {
		document.getElementById(`question-${playerName}`).classList.toggle('border-animate');
	}, 1200)
};

openModal = (category, index) => {
	document.getElementById("modal-question").innerHTML = app._data.board1data[category][index].question;
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
		players: {
			brady: 200,
			Anthony: 800,
			Scott: 1000
		},
        boardData: {}
	}
})
