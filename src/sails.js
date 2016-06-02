import sailsIoClient from 'sails.io.js'
import socketIoClient from 'socket.io-client'

var io = sailsIoClient(socketIoClient)
io.sails.url = 'http://192.168.100.102:1337'

export default io
