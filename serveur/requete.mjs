import { connexion } from './connect.mjs';
// import connexion from './connect.mjs'
export function requete(){
  const connectdb = connexion()

  const sql = 'SELECT texte FROM phrase';
  
  connectdb.query(sql, (error, results) => {
          if (error) {
            console.error('Erreur lors de l\'exécution de la requête :', error);
            return;
          }
          connectdb.end();
         
          return results
          
        });
}
