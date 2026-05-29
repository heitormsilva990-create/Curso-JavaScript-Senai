const express = require("express");
const router = express.Router();

let mensagens = [];

router.post("/", (req,res)=>{

    mensagens.push({
        id: mensagens.length + 1,
        ...req.body
    });

    res.json({
        sucesso:"Mensagem enviada!"
    });

});

router.get("/", (req,res)=>{

    res.json(mensagens);

});

module.exports = router;