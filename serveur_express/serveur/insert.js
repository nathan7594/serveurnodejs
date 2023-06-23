// import { connexion } from "./connect.js";
// export function insert(data){
//   const connectdb = connexion()
//   connectdb.query('INSERT INTO phrase SET ?', data, (err, result) => {
//     if (err) {
//       console.error('Erreur lors de l\'exécution de la requête :', err);
//       return res.status(500).send('Erreur serveur');
//     }
//     console.log('Nouvelle phrase insérée avec succès !');
//   });
// }
import { connexion } from "./connect.js";
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

