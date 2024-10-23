"use strict";

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
