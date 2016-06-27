import sailsIoClient from 'sails.io.js'
import socketIoClient from 'socket.io-client'

var io = sailsIoClient(socketIoClient)
io.sails.url = 'http://localhost:1337'

export default io
