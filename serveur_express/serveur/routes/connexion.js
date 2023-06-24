import express  from 'express';
import { Router } from 'express';
import { queryinscription } from '../usersql/inscription.js';

const connexion = Router();
connexion.use(express.urlencoded({ extended: false }));

connexion.post('/', (req, res,next) => {
    res.redirect('/inscription');
    next()

  });
connexion.post("/", (req, res) => {
    const nom  = req.body.nom;
    const prenom  = req.body.prenom;
    const email  = req.body.email;
    const password  = req.body.nom;
    queryinscription(nom,prenom,email,password)
    // INSERT INTO name VALUE ('abc')
    res.status(200).send("Utilisateur reçu avec succès");
  });


export default connexion;