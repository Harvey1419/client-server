const { Socket } = require("net");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const socket = new Socket();

socket.connect({ host: "localhost", port: 5000 });

readline.on("line", (data) => {
  socket.write(data);
});
socket.on("data", (mensaje) => {
  
});
