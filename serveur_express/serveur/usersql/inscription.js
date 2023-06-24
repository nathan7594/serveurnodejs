import { connexion } from "../connect.js";
export function queryinscription(nom,prenom,email,password) {
  const connectdb = connexion();

  const query ="INSERT INTO user (nom, prenom, email, password) VALUES (?, ?, ?, ?)";
  const values = [
    nom,
    prenom,
    email,
    password,
  ];

  connectdb.query(query, values, (error, results) => {
    if (error) {
      console.error("Erreur lors de l'insertion de l'utilisateur", error);
    } else {
      console.log("Utilisateur inséré avec succès");
      // Effectuer d'autres actions si nécessaire
    }

    // Fermer la connexion à la base de données
    connectdb.end();
  });
}
