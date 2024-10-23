"use strict";

/**
 *      Você gostaria de construir um aplicativo de servidor GraphQL 
 *      API ou adicionar endpoints GraphQL a um aplicativo Express 
 *      existente.
 * 
 *      Use o pacote Apollo Server para incluir definições de tipo 
 *      GraphQL, resolvedores GraphQL e o GraphQL Playground:
*/
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const port1 = process.env.PORT || "3000";
const app1 = express();

const typeDefs1 = gql`
    type Query {
        hello: String
    }
`;

const resolvers1 = {
    Query: {
        hello: () => "Olá Mundo!"
    }
};

const server1 = new ApolloServer({ typeDefs1, resolvers1 });
server1.applyMiddleware({ app1, path: "/" });
app1.listen(port1, () => console.log(`Ouvindo na porta ${port1}!`));

/**
 *      GraphQL é uma linguagem de consulta de código aberto para APIs. 
 *      Ela foi desenvolvida com o objetivo de fornecer endpoints 
 *      únicos para dados, permitindo que os aplicativos solicitem os 
 *      dados específicos que são necessários. O Apollo Server pode ser 
 *      usado como um pacote autônomo ou integrado como middleware para 
 *      bibliotecas populares de aplicativos de servidor Node.js, como 
 *      Express, Hapi, Fastify e Koa.
 * 
 *      No GraphQL, um esquema de definição de tipo é uma representação 
 *      escrita de nossos dados e interações. Ao exigir um esquema, o 
 *      GraphQL impõe um plano rigoroso para nossa API. Isso ocorre 
 *      porque sua API só pode retornar dados e executar interações que 
 *      são definidas dentro do esquema. O componente fundamental dos 
 *      esquemas GraphQL são os tipos de objeto. O GraphQL contém cinco 
 *      tipos escalares integrados:
 * 
 *          • String: Uma string com codificação de caracteres UTF-8
 * 
 *          • Boolean: Um valor verdadeiro ou falso
 * 
 *          • Int: Um inteiro de 32 bits
 * 
 *          • Float: Um valor de ponto flutuante
 * 
 *          • ID: Um identificador exclusivo
 * 
 *      Depois que o esquema é escrito, fornecemos à API uma série de 
 *      resolvedores. Essas são funções que especificam como os dados 
 *      devem ser retornados em uma consulta ou alterados dentro de uma
 *      mutação de dados.
 * 
 *      No exemplo anterior, estamos usando o pacote 
 *      apollo-server-express, que deve ser instalado junto com os 
 *      pacotes express e gql:
 * 
 *          $ npm install express apollo-server-express gql
 * 
 *      Para criar um aplicativo CRUD, podemos definir nossas 
 *      definições de tipo GraphQL e os resolvedores apropriados.
*/
const express = require("express");
const { ApolloServer, gql} = require("apollo-server-express");

const port = process.env.PORT || "3000";
const app = express();

// Um arra de dados
let todos = [
    {
        id: "1",
        texto: "Pedir pizza",
        completo: true
    },
    {
        id: "2",
        texto: "Pegar pizza",
        completo: false
    }
    
];

// GraphQL tipos de definições
const typeDefs = gql`
    type Query {
        todos: [Todo!]!
        todo(id: ID!): Todo!
    }
    
    type Mutation {
        newTodo(texto: String!): Todo!
        updateTodo(id: ID!, texto: String, completo: Boolean): Todo!
        deleteTodo(id: ID!): Todo!
    }
    
    type Todo {
        id: ID!
        texto: String!
        completo: Boolean
    }
`;

// GraphQL resolvedores
const resolvers = {
    Query: {
        todos: () => todos,
        todo: (parent, args) => {
            return todos.find(todo => todo.id === args.id);
        }
    },
    Mutation: {
        newTodo: (parant, args) => {
            const todo = {
                id: String(todos.length + 1),
                texto: args.texto,
                completo: false
            };

            todos.push(todo);
            return todo;
        },

        updateTodo: (parent, args) => {
            const todoIndex = todos.findIndex(todo => todo.id === args.id);
            const todo = {
                id: args.id,
                texto: args.texto || todos[todoIndex].texto,
                completo: args.completo || todos[todoIndex].completo
            };

            todos[todoIndex] = todo;
            return todo;
        },

        deleteTodo: (parent, args) => {
            const deletarTodo = todos.find(todo => todo.id === args.id);
            todos = todos.filter(todo => todo.id !== args.id);
            return deletarTodo;
        }
    }
};

// Configuração do servidor Apollo + Express
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: "/" });
app.listen(port, () => console.log(`Ouvindo na porta ${port}!`));

/**
 *      No exemplo acima, estou usando um armazenamento de dados na 
 *      memória. Ao construir uma API,você provavelmente desejará se 
 *      conectar a um banco de dados. Para fazer isso, você pode 
 *      recorrer a uma biblioteca como Sequelize (para bancos de dados 
 *      SQL), Mongoose (para MongoDB) ou um armazenamento de dados 
 *      online como Firebase. 
 * 
 *      As consultas definidas retornam dados diretamente da API, 
 *      enquanto as mutações nos permitem realizar alterações nos 
 *      dados, como criar um novo item, atualizar um item ou excluir um 
 *      item.   
*/
