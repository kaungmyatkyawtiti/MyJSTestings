const ws = new WebSocket("ws://localhost:4000")

const list = document.querySelector("#list");
const form = document.querySelector("#form");
// const user = document.querySelector("#user");
const msg = document.querySelector("#msg");

function chatItem({ name, msg }) {
  const li = document.createElement("li");
  li.innerHTML = `<b>${name}:</b> ${msg}`;
  list.appendChild(li);
}

form.onsubmit = e => {
  e.preventDefault();

  ws.send(JSON.stringify({
    name: user.value,
    msg: msg.value
  }))

  msg.value = "";
  msg.focus();
}

ws.addEventListener("open", () => {
  console.log("WebSocket connection opened");

  ws.addEventListener("message", e => {
    chatItem(JSON.parse(e.data))
  })
})
