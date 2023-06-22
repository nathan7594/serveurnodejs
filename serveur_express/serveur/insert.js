import { connexion } from "./connect.js";
export function insert(data){
  const connectdb = connexion()
  connectdb.query('INSERT INTO phrase SET ?', data, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return res.status(500).send('Erreur serveur');
    }
    console.log('Nouvelle phrase insérée avec succès !');
  });
}
