import { connexion } from "./connect.mjs";
export function requete(callback) {
  const connectdb = connexion();
  const sql = "SELECT * FROM phrase ORDER BY RAND() LIMIT 1";

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
