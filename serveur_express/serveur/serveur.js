import express from "express";
import router from './routes/route.js';
import connexion from './routes/connexion.js' // Chemin vers votre fichier contenant le routeur


const app = express();

app.use("/", express.static("../client/"));
app.use("/inscription", express.static("../client/inscription.html"));
app.use(express.json());
app.use("/inscription",connexion);
app.use("/api",router);



app.listen(8000, () => console.log("Example app is listening on port 8000."));
