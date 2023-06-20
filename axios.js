const http = require("http");
// const { resolve } = require("path");
const host = 'localhost';
const port = 8000;

const axios = require('axios');

const requestListener = function (req, res) {
    res.writeHead(200);
    axios.get('https://www.affirmations.dev/')
    .then(response => {
        console.log("C'est toi",response.data)
        res.end(response.data.affirmation);
        console.log('Affirmation:', response.data.affirmation);
    })
    .catch(error => {
        console.error('Une erreur s\'est produite:', error);
    });  
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});