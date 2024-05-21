const client = "host"

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
            app._data.question.category = xmlDoc.getElementsByTagName('category')[0].childNodes[0].nodeValue;
            app._data.question.index = xmlDoc.getElementsByTagName('index')[0].childNodes[0].nodeValue;
            break;
        case "returnToBoard":
            app._data.question.category = null;
            app._data.question.index = null;
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
			category: null,
			index: null
		},
        boardData: {}

	}
})
