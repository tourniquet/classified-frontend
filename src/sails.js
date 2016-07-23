import sailsIoClient from 'sails.io.js'
import socketIoClient from 'socket.io-client'
import settings from './settings'

var io = sailsIoClient(socketIoClient)
io.sails.url = settings.backend

export default io
