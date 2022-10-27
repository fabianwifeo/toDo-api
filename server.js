const http = require('http');
const app = require('./app');

app.set('port', 4000);

const server = http.createServer(app);

server.listen(4000);

server.on('listening', () => {
    console.log('--------------------')
    console.log('listening on port 4000')
    console.log('--------------------')
    console.log('http://localhost:4000/')
    console.log('--------------------')
})