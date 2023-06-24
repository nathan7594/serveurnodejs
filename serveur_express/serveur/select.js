import { connexion } from "./connect.js";
export function select(callback) {
  const connectdb = connexion(); // Obtient la connexion à la base de données
  const sql = "SELECT * FROM phrase ORDER BY RAND() LIMIT 1"; // Sélectionne une phrase aléatoire dans la table "phrases"

  connectdb.query(sql, (error, results) => {
    if (error) {
      console.error("Erreur lors de l'exécution de la requête :", error);
      callback(error, null);
      return;
    }
    connectdb.end();
    callback(null, results);
  });
}
