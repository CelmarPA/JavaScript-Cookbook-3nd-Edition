const express = require('express');
const formidable = require('formidable');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.get('/', (req, res) =>
  res.send('Example server for receiving JS POST requests')
);

app.post('/select', (req, res) => {
  const form = formidable();

    form.parse(req, (err, fields) => {
        if (err) {
            return;
        }
        if (fields.coisaLegal === "bichos") {
            res.send(["filhotes", "gatinhos", "porquinhos-da-índia"]);
        } else if (fields.coisaLegal === "doces") {
            res.send(["alcaçuz", "bolo", "biscoitos", "creme"]);
        } else if (fields.coisaLegal === "passaros") {
            res.send(["tordo", "tordo-zombeteiro", "tentilhão", "pombo"]);
        } else if (fields.coisaLegal === "flores") {
            res.send(["rosas", "liros", "narcisos", "amores-perfeitos"])
        } else {
            res.send(["Nenhuma coisa boa encontrada"])
        }
    });
});

app.listen(port, () =>
    console.log(`Exemplo de aplicativo escutando em http://localhost:${port}`)
);
