const express = require("express");

const router = express.Router();

let usuarios = [];

// CADASTRO

router.post("/", (req,res) => {

    const {

        nome,
        email,
        senha

    } = req.body;

    if(

        !nome ||
        !email ||
        !senha

    ){

        return res.status(400).json({

            erro:
            "Preencha todos os campos."

        });

    }

    const usuario = {

        id:
        usuarios.length + 1,

        nome,
        email,
        senha

    };

    usuarios.push(usuario);

    res.json({

        sucesso:
        "Usuário cadastrado!",

        usuario

    });

});

// LISTAR USUÁRIOS

router.get("/", (req,res) => {

    res.json(usuarios);

});

module.exports = router;