const client = "controller"

const wsProtocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsHost = location.host;
//const wsUrl = `${wsProtocol}//${wsHost}`;
const wsUrl = "127.0.0.1:8999";

let socket = new WebSocket("wsUrl");

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