const express = require("express");

const router = express.Router();

// Banco de dados fake
let usuarios = [

    {
        id: 1,
        nome: "Admin",
        email: "admin@email.com",
        senha: "123456"
    }

];

// LOGIN

router.post("/", (req, res) => {

    const { email, senha } = req.body;

    if (!email || !senha) {

        return res.status(400).json({

            erro: "Preencha todos os campos."

        });

    }

    const usuario = usuarios.find(

        usuario =>
        usuario.email === email &&
        usuario.senha === senha

    );

    if (!usuario) {

        return res.status(401).json({

            erro: "Email ou senha inválidos."

        });

    }

    res.json({

        sucesso: "Login realizado!",

        usuario: {

            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email

        }

    });

});

module.exports = router;