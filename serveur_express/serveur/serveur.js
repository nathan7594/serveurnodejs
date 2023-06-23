import express from "express";
import { insert } from "./insert.js";
import { select } from "./select.js";

const app = express();
app.use("/", express.static("../client/"));
app.use(express.json());


app.post("/api", (req, res) => {
  const { value } = req.body;
  insert(value);
  // INSERT INTO name VALUE ('abc')
  res.status(200).send("Poste reçu avec succès");
});

app.get("/api", (req, res) => {
  console.log("coucou");
  select((error, results) => {
    console.log("c'est error",error)
    console.log("c'est result",results)
    res.end(JSON.stringify(results))
  })
});

app.listen(8000, () => console.log("Example app is listening on port 8000."));
