const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const eventosRoutes = require("./routes/eventosRoutes");
const config = require("./config/config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

// Definir rotas
app.use('/api', eventosRoutes);

// Teste de conexão (raiz)
app.get("/", (req, res) => {
    res.send("Ok – Servidor disponível.");
});

// Inicializando o servidor
app.listen(config.port, () => {
    console.log("Servidor funcionando na porta " + config.port);
});
