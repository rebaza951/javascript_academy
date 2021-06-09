let chat = io('/chat');
let notifications = io('/notifications');
let nickname;
let channelName;
const channelModal = new bootstrap.Modal(document.getElementById('channel-modal'), {});
const sendMessageBtn = document.querySelector('#send-message-btn');
const $alertBtn = document.querySelector('#alert-btn');
const $alertInput = document.querySelector('#alert-input');

chat.on("lastSocket", function (id) {
    document.getElementById("lastSocket").innerHTML = id;
});

setUserData();

setChannel();

chat.on("connect", function () {
    chat.emit("join-room", channelName, {id: chat.id, nickname});
    console.log("connect");
})

sendMessageBtn.addEventListener('click', function () {
    const input = document.querySelector("#message-input");
    const data = {
        message: input.value,
        nickname,
        time: "11:00"
    }
    printMessage(data);
    chat.emit("add-message", data);
    input.value = "";
});

$alertBtn.addEventListener('click', function(event) {
    event.preventDefault();
    notifications.emit('alert', $alertInput.value);
}, false);

chat.on("add-message", printMessage);

chat.on("update-room", function (room) {
    let content = "";
    Object.keys(room.participants).map(id => {
        content += `<li>${room.participants[id]}</li>`;222
    });
    console.log("update-room", room, Object.keys(room.participants))
    document.getElementById("chat-list").innerHTML = content;
    document.getElementById("countUsers").innerHTML = String(Object.keys(room.participants).length);
})

notifications.on('alert', message => {
    alert(`Mensaje de alert: ${message}`);
});

function setUserData(){
    nickname = nickname ? nickname : prompt("Tell me your name");
    if (!nickname.trim()) {
        nickname = "anonymous";
    }
    channelModal.show();
    document.getElementById("myNickname").innerHTML = nickname;
    document.getElementById("socketId").innerHTML = chat.id;
}

function setChannel() {
    let $channelBtn = document.querySelector("#channel-btn");
    let $channels = document.querySelectorAll(".channel-list");
    let $channelLabel = document.querySelector("#channel-label")

    $channelBtn.addEventListener("click", function (event) {
        event.preventDefault();
        for (const channel of $channels) {
            if (channel.checked) {
                channelName = channel.value;
                chat.emit("join-room", channelName, {id: chat.id, nickname});
                console.log("set channel");
                $channelLabel.innerHTML = channelName;
                channelModal.hide();
                break;
            }
        }
    })
}

function printMessage(data) {
    const html = `<li class="list-group-item">
                  <p class="mb-1">${data.message}</p>
                  <small class="text-muted">${data.nickname} - ${data.time}</small>
                </li>`;
    let chatHistory = document.querySelector("#chat-history");
    chatHistory.innerHTML += html;
}