"use strict";

const express = require("express");

const port = process.env.PORT || "3000";
const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true }));

// Um array de dados
let todos = [
    {
        id: "1",
        texto: "Pedido pizza",
        completo: true
    },
    {
        id: "2",
        texto: "Pegar pizza",
        completo: false
    }
];

// Obtém a lista de todos
app.get("/todos", (req, res) => {
    return res.send({ data: { todos } });
});

// Obtém um todo individual
app.get("/todos/:todoId", (req, res) => {
    const encontarTodo = todos.find(todo => todo.id === req.params.todoId);
    return res.send({ data: encontarTodo });
});

// Criar um novo todo
app.post("/todos", (req, res) => {
    const todo = {
        id: String(todos.length + 1),
        texto: req.body.texto,
        completo: false
    };

    todos.push(todo);
    return res.send({ data: todo});
});

// Atualiza um todo
app.put("/todos/:todoId", (req, res) => {
    const todoIndex = todos.findIndex(todo => todo.id === req.params.todoId);
    const todo = {
        id: req.params.todoId,
        texto: req.body.texto || todos[todoIndex].texto,
        completo: req.body.completo || todos[todoIndex].completo
    };

    todos[todoIndex] = todo;
    return res.send({ data: todo });
});

// Deletar um todo
app.delete("/todos/:todoId", (req, res) => {
    const deletarTodo = todos.find(todo => todo.id === req.params.todoId);
    todos = todos.filter(todo => todo.id !== req.params.todoId);
    return res.send({ data: deletarTodo });
});

// Ouvir na porta 3000 ou na PORTA definida como uma variável de ambiente
app.listen(port, () => console.log(`Ouvindo na porta ${port}!`));
