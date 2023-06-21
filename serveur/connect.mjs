import mysql from "mysql";

export function connexion() {
  const connection = mysql.createConnection({
    host: "localhost", // Remplacez par l'adresse de votre serveur MySQL
    user: "root",
    password: "",
    database: "node",
  });

  connection.connect((error) => {
    if (error) {
      console.error(
        "Erreur lors de la connexion à la base de données :",
        error
      );
      return;
    } else {
      console.log("Connexion à la base de données MySQL réussie");
    }
  });
  return connection;
}
