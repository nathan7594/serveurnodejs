import { Router } from 'express';
import { insert } from "../insert.js";
import { select } from "../select.js";

const router = Router();

router.post("/", (req, res) => {
    const { value } = req.body;
    insert(value);
    // INSERT INTO name VALUE ('abc')
    res.status(200).send("Poste reçu avec succès");
  });
  
router.get("/", (req, res) => {
    select((error, results) => {
      console.log("c'est error",error)
      console.log("c'est result",results)
      res.end(JSON.stringify(results))
    })
  });
router.get("/",(req,res) => {
    console.log("delete")
    res.send('ok')

})
// Autres routes...

export default router;

