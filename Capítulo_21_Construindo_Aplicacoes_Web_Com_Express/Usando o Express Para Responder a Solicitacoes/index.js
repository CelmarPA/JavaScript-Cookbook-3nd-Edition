"use strict";
const express = require("express");

const app = express();
const port = process.env.PORT || "3001";

// Responde com "Olá mundo" no caminho raiz
app.get('/', (req, res) => res.send("Olá mundo"));

// Meio-termo para arquivos estáticos servirá arquivos estáticos do diretório 'files'
app.use(express.static("files"));

// Usa Pug como engine modelo 
app.set("view engine", "pug");

// Descomente para ver exemplos com EJS:
// app.set('view engine', 'ejs');

// Responde com o modelo (template)
app.get("/template", (req, res) => {
    res.render("template");
});

// Um objeto de usuário de dados para enviar ao modelo
const usuarDados = {
    nome: "Celmar",
    email: "celmar@gmail.com",
    avatar: "http://drawdoo.com/wp-content/themes/blogfolio/themify/img.php?src=http://drawdoo.com/wp-content/uploads/tutorials/OnePiece/lesson06/step_00.png&w=665&h=&zc=1&q=60&a=t"
};

// Renderiza o modelo com dados do usuário
app.get("/user", (req, res) => {
    res.render("user", { usuarDados });
});

app.listen(port, () => console.log(`Ouvindo a porta ${port}`));
