const net = require('net');  

// server socket 생성
const serverSocket = new net.Server()

// 클라이언트의 새로운 연결이 만들어 질 때 발생
serverSocket.on('connection', (socket) => {
  // 'connection' listener.
  console.log(`${socket.address().address} connected.`);

  // read request from connection socket
  socket.on('data', (data)=>{
      console.log(`receive data: ${data}`)
      // write reply to connection socket
      socket.write(data.toString().toUpperCase())  
  })

  socket.on('end', (err)=>console.log('client connection ended'))
  socket.on('error', (err)=>console.log(err.toString()))
  socket.on('close', ()=>console.log('close'))
})

serverSocket.listen(3000, () => console.log('server is running'));

serverSocket.on('error', (err) => console.log(err.toString()));