const express = require("express");
const router = express.Router();

let favoritos = [];

router.post("/", (req,res)=>{

    favoritos.push(req.body);

    res.json({
        sucesso:"Favoritado!"
    });

});

router.get("/", (req,res)=>{

    res.json(favoritos);

});

module.exports = router;