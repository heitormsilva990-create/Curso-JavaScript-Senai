const express = require("express");
const router = express.Router();

let avaliacoes = [];

router.post("/", (req,res)=>{

    avaliacoes.push({
        id: avaliacoes.length + 1,
        ...req.body
    });

    res.json({
        sucesso:"Avaliação enviada!"
    });

});

router.get("/", (req,res)=>{

    res.json(avaliacoes);

});

module.exports = router;