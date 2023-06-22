import { connexion } from "./connect.mjs";
export function insert(param) {
  const connectdb = connexion();

  const query = "INSERT INTO phrase (texte) VALUES (?)";
  const values = param;

  // Exécution de la requête d'insertion
  connectdb.query(query, values, (error, results, fields) => {
    if (error) throw error;
    console.log("Nouvelle phrase insérée avec succès !");
  });

  // Fermer la connexion à la base de données après l'exécution de la requête
  connectdb.end();
}
