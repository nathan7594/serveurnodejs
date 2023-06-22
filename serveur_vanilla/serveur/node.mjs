import fetch from "node-fetch";
import http from "http";
import { requete } from "./requete.mjs";
import { insert } from "./insert.mjs";
import { connexion } from "./connect.mjs";
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
    requete((error, results) => {
      if (error) {
        res.statusCode = 500;
        res.end(
          JSON.stringify({
            error:
              "Une erreur s'est produite lors de l'exécution de la requête.",
          })
        );
        return;
      }

      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(results));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "La ressource demandée n'existe pas." }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
