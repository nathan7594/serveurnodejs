import { connexion } from './connect.mjs';
// import connexion from './connect.mjs'
export function requete(callback) {
  const connectdb = connexion();
  const sql = 'SELECT texte FROM phrase';

  connectdb.query(sql, (error, results) => {
    if (error) {
      console.error('Erreur lors de l\'exécution de la requête :', error);
      callback(error, null);
      return;
    }

    connectdb.end();
    callback(null, results);
  });
}
