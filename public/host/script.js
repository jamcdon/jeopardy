const client = "host"

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
		question: {
			category: "Indy 500",
			index: 0
		},
        boardData: {}

	}
})
