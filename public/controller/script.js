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
		currentQuestion:{
			// set this as null to start of course
            question: "While named after the amount of miles in the race, this is how many laps Indycar drivers complete",
            answer: "200",
            picture: null,
            doubleJeopardy: false,
            price: 200
			// end null fields
        },
		players: {
			brady: 200,
			Anthony: 800,
			Scott: 1000
			},
        boardData: {}
	}
})
