var net = require('net')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// client socket 생성 
var clientSocket = new net.Socket()

clientSocket.connect({host: '127.0.0.1', port: 3000}, function(){
    console.log('connected to server')
    
    //clientSocket.write('hello world')
    rl.on('line', (input)=>clientSocket.write(input))
})

// read reply form clientSocket
clientSocket.on('data', (chunk)=>{
    console.log(`receive data: ${chunk}`)
    // clientSocket.emit('end', (err)=>console.log(err.toString()))
})

clientSocket.on('error', (err)=>console.log(err.toString()))
clientSocket.on('end', ()=>console.log('disconnected from server'))