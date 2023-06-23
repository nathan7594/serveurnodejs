import express from "express";
import serveIndex from "serve-index";
import { insert } from "./insert.js";

const app = express();
app.use('/', express.static('../client/'));
app.use("/public", serveIndex("../"));
app.use(express.json());
app.post('/', (req, res) => {
  const {value} = req.body
  insert(value)
  // Récupère les données envoyées dans le corps de la requête
  // Effectue les opérations souhaitées avec les données du poste
  // Par exemple, vous pouvez les enregistrer dans une base de données ou effectuer d'autres traitements
  res.status(200).send('Poste reçu avec succès');
});
app.listen(8000, () => console.log("Example app is listening on port 8000."));
