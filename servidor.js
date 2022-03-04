const { Socket } = require('dgram');
const  { Server, SocketAddress } = require('net')

const server = new Server();

server.listen({port:5000, host: '0.0.0.0'}, () => {
    console.log(`Server listening`);
    
})

server.on('connection', (socket) => {
    console.log(`Nueva conexión de:${socket.remoteAddress}:${socket.remotePort}`);
    socket.setEncoding('utf-8')
    socket.on('data',(mensaje) => {
        console.log((`${socket.remoteAddress}:${socket.remotePort} -> ${mensaje}`));
    })
})