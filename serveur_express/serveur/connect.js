import mysql from "mysql2";
export function connexion(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node'
      });
      connection.connect((err) => {
        if (err) {
          console.error('Erreur de connexion à la base de données :', err);
          return;
        }
        console.log('Connexion à la base de données réussie !');
      });
}

  

  