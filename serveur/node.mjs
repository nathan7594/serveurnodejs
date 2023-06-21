import fetch from "node-fetch";
import http from "http";
import { requete } from "./requete.mjs";
import { insert } from "./insert.mjs";
const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  // Autoriser toutes les origines (*)
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Autoriser les en-têtes spécifiques
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Autoriser les méthodes HTTP spécifiques
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    res.writeHead(200);
    res.end();
  } else if (req.method === "POST" && req.url === "/") {
    let body = "";
  
    req.on("data", (chunk) => {
      body += chunk;
    });
  
    req.on("end", () => {
      const data = JSON.parse(body); // Analyse de la donnée JSON
  
      // Traitez la donnée comme vous le souhaitez
      console.log(data);
      insert(data);
  
      // Répondez à la requête du client
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Donnée reçue avec succès !");
    });
  } else if (req.method === "GET" && req.url === "/") {
    // Gérer la requête GET pour la page d'accueil
    res.writeHead(200, { "Content-Type": "text/json" });
   
    res.end(requete());
  } else {
    // Gérer les autres cas (URL non trouvée, méthode non prise en charge, etc.)
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

//   const requestListener = function (req, res) {
//     if(req.url === "/accueil"){
//       console.log("Bienvenue sur l'accueil")
//       requete()

//     }

//     res.writeHead(200);
//     fetch('https://www.affirmations.dev/')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Échec de la requête à l\'API');
//       }
//       return response.json(); // ou response.json() si la réponse est au format JSON
//     })
//     .then(data => {
//       console.log('Données de l\'API :', data);
//       res.end(data.affirmation)
//       // Traitez les données selon vos besoins
//     })
//     .catch(error => {
//       console.error('Erreur lors de la connexion à l\'API :', error);
//       // Gérez l'erreur de connexion à l'API
//     });

// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);

// });
