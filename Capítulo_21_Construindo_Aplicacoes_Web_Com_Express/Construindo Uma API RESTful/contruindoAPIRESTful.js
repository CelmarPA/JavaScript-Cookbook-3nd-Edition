"use strict";

/**
 *      Você quer criar uma API REST usando Node.js.
 * 
 *      Use o Express com os métodos app.get, app.post, app.put e 
 *      app.delete:
*/
const express = require("express");

const app1 = express();
const port1 = process.env.PORT || "3000";

app1.get("/", (req, res) => {
    return res.send("Recebeu um método GET HTTP");
});

app1.post("/", (req, res) => {
    return res.send("Recebeu um método POST HTTP");
});

app1.put("/", (req, res) => {
    return res.send("Recebeu um método PUT HTTP");
});

app1.delete("/", (req, res) => {
    return res.send("Recebeu um método DELETE HTTP");
});

app1.listen(port1, () => console.log(`Ouvindo na porta ${port1}!`));

/**
 *      REST significa “Representational State Transfer” e é a 
 *      abordagem arquitetônica mais comum para a construção de APIs. 
 *      REST nos permite interagir com uma fonte de dados remota por 
 *      HTTP, usando os métodos HTTP padrão de GET, POST, PUT e DELETE.
 *      Podemos usar os métodos de roteamento Express para aceitar 
 *      essas solicitações.
 * 
 *      No exemplo a seguir, será criado várias rotas que servem como 
 *      pontos de extremidade da API. Cada ponto de extremidade 
 *      responderá a uma solicitação HTTP:
 * 
 *          /todos: Aceitará uma solicitação get para uma lista de 
 *                  todos, bem como uma solicitação post para criar um
 *                  novo todo.
 * 
 *          /todos/: todoId: Aceitará uma solicitação get que retornará 
 *                   um todo específico, bem como uma solicitação put,
 *                   que permitirá ao usuário atualizar o conteúdo do 
 *                   todo ou o estado concluído, e uma solicitação 
 *                   delete, que excluirá o todo específico.
 * 
 *      Com essas rotas definidas, podemos desenvolver uma API REST que 
 *      responda a essas solicitações adequadamente:
*/
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
        texto: req.body.text,
        completo: false
    };

    todos.push(todo);
    return res.send({ data: todo});
});

// Atualiza um todo
app.put("/todos/:todoId", (req, res) => {
    const todoIndex = todos.find(todo => todo.id === req.params.todoId);
    const todo = {
        id: req.params.todoId,
        texto: req.body.text || todos[todoIndex].text,
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

/**
 *      No terminal, você pode usar curl para testar nossas respostas:
 * 
 *          # obtém a lista de todos 
 *              curl http://localhost:3000/todos 
 * 
 *          # obtém um todo  individual 
 *              curl http://localhost:3000/todos/1 
 * 
 *          # cria um novo todo 
 *              curl -X POST -H "Content-Type:application /json" / 
 *                  http://localhost:3000/todos -d '{"text":"Comer 
 *                  pizza"}' 
 * 
 *          # atualiza uma tarefa 
 *              curl -X PUT -H "Content-Type:application/json" / 
 *                  http:/ /localhost:3000/todos/2 -d '{"completed": 
 *                  true } 
 *  
 *          # exclui uma tarefa 
 *              curl -X DELETE http://localhost:3000/todos/3
 * 
 *      Testar manualmente com curl pode rapidamente se tornar tedioso. 
 *      Para desenvolvimento de API, você também pode querer usar uma 
 *      UI de cliente REST, como Insomnia ou Postman.
 * 
 *      No exemplo acima, foi utilizado um armazenamento de dados na 
 *      memória. Ao construir uma API, você provavelmente desejará se 
 *      conectar a um banco de dados. Para fazer isso, você pode 
 *      recorrer a uma biblioteca como Sequelize (para bancos de dados 
 *      SQL), Mongoose (para MongoDB) ou um armazenamento de dados 
 *      online como Firebase.
*/
