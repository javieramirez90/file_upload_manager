const express  =  require('express');
const cors = require('cors');
const upload = require('./upload');

const server = express();

PORT=8000

let corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', upload)

server.listen(PORT, () => {
	console.log('Server started!')
})
