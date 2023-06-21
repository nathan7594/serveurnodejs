import fetch from 'node-fetch'; 
import http from 'http';
import { requete } from './requete.mjs';
const host = 'localhost';
const port = 8000;

  const requestListener = function (req, res) {
    if(req.url === "/accueil"){
      console.log("Bienvenue sur l'accueil")
      requete()
      
    }
  
    res.writeHead(200);
    fetch('https://www.affirmations.dev/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Échec de la requête à l\'API');
      }
      return response.json(); // ou response.json() si la réponse est au format JSON
    })
    .then(data => {
      console.log('Données de l\'API :', data);
      res.end(data.affirmation)
      // Traitez les données selon vos besoins
    })
    .catch(error => {
      console.error('Erreur lors de la connexion à l\'API :', error);
      // Gérez l'erreur de connexion à l'API
    });
   
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});





// const requestListener = async function ok(req, res) {
//     res.writeHead(200);
//     return new Promise((resolve, reject) => {
//         fetch('https://www.affirmations.dev/')
//         .then(reponse => {
//             resolve(reponse.json());
//             console.log("Données de l'API :", reponse);
//             // Faire quelque chose avec les données de l'API
//           })
//           .catch(error => {
//             console.error("Erreur lors de la connexion à l'API :", error);
//             // Gérer l'erreur de connexion à l'API
//           });
//       });
// };
// const http = require("http");
// // const { resolve } = require("path");
// const host = 'localhost';
// const port = 8000;

// const axios = require('axios');

// const requestListener = function (req, res) {
//     res.writeHead(200);
//     axios.get('https://www.affirmations.dev/')
//     .then(response => {
//         console.log("C'est toi",response.data)
//         res.end(response.data.affirmation);
//         console.log('Affirmation:', response.data.affirmation);
//     })
//     .catch(error => {
//         console.error('Une erreur s\'est produite:', error);
//     });  
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });








