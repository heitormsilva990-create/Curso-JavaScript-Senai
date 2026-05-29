const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// =========================
// CONFIGURAÇÕES
// =========================

app.use(cors());
app.use(express.json());

// =========================
// BANCO DE DADOS FAKE
// =========================

let usuarios = [];

let hoteis = [
    {
        id: 1,
        nome: "Hotel Copacabana Palace",
        estado: "RJ",
        cidade: "Rio de Janeiro",
        estrelas: 5,
        preco: 1200
    },
    {
        id: 2,
        nome: "Hotel Gramado Premium",
        estado: "RS",
        cidade: "Gramado",
        estrelas: 5,
        preco: 950
    },
    {
        id: 3,
        nome: "Hotel Salvador Beach",
        estado: "BA",
        cidade: "Salvador",
        estrelas: 4,
        preco: 750
    }
];

let reservas = [];
let avaliacoes = [];
let favoritos = [];
let contatos = [];

// =========================
// HOME
// =========================

app.get("/", (req, res) => {

    res.json({
        mensagem: "API Brasil Viagens Online"
    });

});

// =========================
// CADASTRO
// =========================

app.post("/cadastro", (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            erro: "Preencha todos os campos."
        });
    }

    usuarios.push({
        id: usuarios.length + 1,
        nome,
        email,
        senha
    });

    res.json({
        sucesso: "Usuário cadastrado!"
    });

});

// =========================
// LOGIN
// =========================

app.post("/login", (req, res) => {

    const { email, senha } = req.body;

    const usuario = usuarios.find(u =>
        u.email === email &&
        u.senha === senha
    );

    if (!usuario) {

        return res.status(401).json({
            erro: "Email ou senha inválidos."
        });

    }

    res.json({
        sucesso: "Login realizado!",
        usuario
    });

});

// =========================
// LISTAR HOTÉIS
// =========================

app.get("/hoteis", (req, res) => {

    res.json(hoteis);

});

// =========================
// HOTEL POR ID
// =========================

app.get("/hoteis/:id", (req, res) => {

    const id = Number(req.params.id);

    const hotel = hoteis.find(h => h.id === id);

    if (!hotel) {

        return res.status(404).json({
            erro: "Hotel não encontrado."
        });

    }

    res.json(hotel);

});

// =========================
// BUSCAR ESTADO
// =========================

app.get("/buscar/:estado", (req, res) => {

    const estado = req.params.estado;

    const resultado = hoteis.filter(h =>
        h.estado.toLowerCase() ===
        estado.toLowerCase()
    );

    res.json(resultado);

});

// =========================
// RESERVAS
// =========================

app.post("/reservas", (req, res) => {

    const {
        nome,
        hotelId,
        entrada,
        saida
    } = req.body;

    reservas.push({
        id: reservas.length + 1,
        nome,
        hotelId,
        entrada,
        saida
    });

    res.json({
        sucesso: "Reserva criada!"
    });

});

app.get("/reservas", (req, res) => {

    res.json(reservas);

});

// =========================
// AVALIAÇÕES
// =========================

app.post("/avaliacoes", (req, res) => {

    const {
        hotelId,
        usuario,
        nota,
        comentario
    } = req.body;

    avaliacoes.push({
        hotelId,
        usuario,
        nota,
        comentario
    });

    res.json({
        sucesso: "Avaliação enviada!"
    });

});

app.get("/avaliacoes/:hotelId", (req, res) => {

    const hotelId = Number(req.params.hotelId);

    const resultado = avaliacoes.filter(a =>
        a.hotelId === hotelId
    );

    res.json(resultado);

});

// =========================
// FAVORITOS
// =========================

app.post("/favoritos", (req, res) => {

    favoritos.push(req.body);

    res.json({
        sucesso: "Adicionado aos favoritos!"
    });

});

app.get("/favoritos", (req, res) => {

    res.json(favoritos);

});

// =========================
// CONTATO
// =========================

app.post("/contato", (req, res) => {

    const {
        nome,
        email,
        categoria,
        mensagem
    } = req.body;

    contatos.push({
        id: contatos.length + 1,
        nome,
        email,
        categoria,
        mensagem
    });

    res.json({
        sucesso: "Mensagem enviada!"
    });

});

app.get("/contato", (req, res) => {

    res.json(contatos);

});

// =========================
// ADMINISTRADOR
// =========================

app.post("/admin/hoteis", (req, res) => {

    const hotel = {

        id: hoteis.length + 1,

        nome: req.body.nome,
        estado: req.body.estado,
        cidade: req.body.cidade,
        estrelas: req.body.estrelas,
        preco: req.body.preco

    };

    hoteis.push(hotel);

    res.json({
        sucesso: "Hotel cadastrado!"
    });

});

app.delete("/admin/hoteis/:id", (req, res) => {

    const id = Number(req.params.id);

    hoteis = hoteis.filter(h =>
        h.id !== id
    );

    res.json({
        sucesso: "Hotel removido!"
    });

});

// =========================
// SERVIDOR
// =========================

app.listen(PORT, () => {

    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );


    res.json({

        sucesso: "Login realizado!",
    
        usuario: {
    
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
    
        }
    
    });

// =========================
// CADASTRO
// =========================

app.post("/cadastro", (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {

        return res.status(400).json({
            erro: "Preencha todos os campos."
        });

    }

    usuarios.push({

        id: usuarios.length + 1,
        nome,
        email,
        senha

    });

    res.json({

        sucesso: "Usuário cadastrado!"

    });

});


const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* =========================
   BANCO DE DADOS FAKE
========================= */

let usuarios = [];

let hoteis = [

    {
        id: 1,
        nome: "Hotel Copacabana Palace",
        cidade: "Rio de Janeiro",
        estado: "RJ",
        estrelas: 5,
        preco: 1200
    },

    {
        id: 2,
        nome: "Hotel Gramado Premium",
        cidade: "Gramado",
        estado: "RS",
        estrelas: 5,
        preco: 950
    },

    {
        id: 3,
        nome: "Hotel Salvador Beach",
        cidade: "Salvador",
        estado: "BA",
        estrelas: 4,
        preco: 750
    }

];

let reservas = [];
let favoritos = [];
let avaliacoes = [];
let contatos = [];

/* =========================
   HOME
========================= */

app.get("/", (req, res) => {

    res.json({
        mensagem: "API Brasil Viagens Online"
    });

});

/* =========================
   CADASTRO
========================= */

app.post("/cadastro", (req, res) => {

    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {

        return res.status(400).json({
            erro: "Preencha todos os campos."
        });

    }

    usuarios.push({

        id: usuarios.length + 1,
        nome,
        email,
        senha

    });

    res.json({

        sucesso: "Usuário cadastrado!"

    });

});

/* =========================
   LOGIN
========================= */

app.post("/login", (req, res) => {

    const { email, senha } = req.body;

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

/* =========================
   HOTÉIS
========================= */

// LISTAR TODOS





});