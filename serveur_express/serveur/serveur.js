import express from "express";
import serveIndex from "serve-index";
import { insert } from "./insert.js";
const app = express();
app.use('/', express.static('../client/'));
app.use("/public", serveIndex("../")); // Question Laila Je comprends pas la différence entre les deux


app.use(express.json()); // Middleware pour parser le corps de la requête au format JSON

app.post('/', (req, res) => {
  console.log(req)
  const data = req.body; 
  console.log(data)// Récupère les données envoyées dans le corps de la requête
  insert(data)
  // Effectue les opérations souhaitées avec les données du poste
  // Par exemple, vous pouvez les enregistrer dans une base de données ou effectuer d'autres traitements
  res.status(200).send('Poste reçu avec succès');
});

app.listen(8000, () => console.log("Example app is listening on port 8000."));
