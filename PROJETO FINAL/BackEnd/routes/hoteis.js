app.get("/hoteis", (req, res) => {

    res.json(hoteis);

});

// BUSCAR POR ID

app.get("/hoteis/:id", (req, res) => {

    const id = Number(req.params.id);

    const hotel = hoteis.find(
        h => h.id === id
    );

    if (!hotel) {

        return res.status(404).json({

            erro: "Hotel não encontrado."

        });

    }

    res.json(hotel);

});

// BUSCAR POR ESTADO

app.get("/buscar/:estado", (req, res) => {

    const estado = req.params.estado;

    const resultado = hoteis.filter(

        hotel =>
        hotel.estado.toLowerCase() ===
        estado.toLowerCase()

    );

    res.json(resultado);

});

/* =========================
   FAVORITOS
========================= */

app.post("/favoritos", (req, res) => {

    favoritos.push(req.body);

    res.json({

        sucesso:
        "Hotel adicionado aos favoritos!"

    });

});

app.get("/favoritos", (req, res) => {

    res.json(favoritos);

});

/* =========================
   RESERVAS
========================= */

app.post("/reservas", (req, res) => {

    reservas.push({

        id: reservas.length + 1,

        ...req.body

    });

    res.json({

        sucesso:
        "Reserva realizada!"

    });

});

app.get("/reservas", (req, res) => {

    res.json(reservas);

});

/* =========================
   AVALIAÇÕES
========================= */

app.post("/avaliacoes", (req, res) => {

    avaliacoes.push(req.body);

    res.json({

        sucesso:
        "Avaliação enviada!"

    });

});

app.get("/avaliacoes", (req, res) => {

    res.json(avaliacoes);

});

/* =========================
   CONTATO
========================= */

app.post("/contato", (req, res) => {

    contatos.push({

        id: contatos.length + 1,

        ...req.body

    });

    res.json({

        sucesso:
        "Mensagem enviada!"

    });

});

app.get("/contato", (req, res) => {

    res.json(contatos);

});

/* =========================
   SERVIDOR
========================= */

app.listen(PORT, () => {

    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );

});