const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send("Olá Mundo")
})

server.listen(3000, () => {
    console.log('Server Rodando...')
});
