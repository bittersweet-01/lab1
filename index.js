const http = require('http');
const PORT = 3030;

const newModule = require("./NewModule");

const server = http.createServer(function(req, res) {
    const _newModule = new newModule.NewModule("Vika");
    res.write(_newModule.getMessage());
    res.end();
})

server.listen(PORT);
console.log(`Server listening on port ${PORT}`);