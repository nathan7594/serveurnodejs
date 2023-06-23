import express from "express";
import serveIndex from "serve-index";
import { insert } from "./insert.js";
import { select } from "./select.js";

const app = express();
app.use("/", express.static("../client/"));
app.use("/public", serveIndex("../"));
app.use(express.json());


app.post("/post", (req, res) => {
  const { value } = req.body;
  insert(value);
  res.status(200).send("Poste reçu avec succès");
});

app.get("/get", (req, res, next) => {
  console.log("coucou");
  select((error, results) => {
    console.log("c'est error",error)
    console.log("c'est result",results)
    res.end(JSON.stringify(results))
  })
  // next()
});

app.listen(8000, () => console.log("Example app is listening on port 8000."));
