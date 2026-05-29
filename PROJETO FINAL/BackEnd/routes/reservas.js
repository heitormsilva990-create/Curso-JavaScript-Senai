const express = require("express");

const router = express.Router();

let reservas = [];

// Criar reserva
router.post("/", (req, res) => {

    const {
        nome,
        hotelId,
        entrada,
        saida
    } = req.body;

    const reserva = {

        id: reservas.length + 1,
        nome,
        hotelId,
        entrada,
        saida

    };

    reservas.push(reserva);

    res.json({

        sucesso: "Reserva realizada!",
        reserva

    });

});

// Listar reservas
router.get("/", (req, res) => {

    res.json(reservas);

});

// Buscar reserva específica
router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const reserva = reservas.find(
        r => r.id === id
    );

    if (!reserva) {

        return res.status(404).json({

            erro: "Reserva não encontrada"

        });

    }

    res.json(reserva);

});

module.exports = router;