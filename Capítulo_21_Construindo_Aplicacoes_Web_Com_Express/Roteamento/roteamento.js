"use strict";

/**
 *      Você deseja rotear usuários para diferentes recursos em seu 
 *      aplicativo com base na solicitação.
 * 
 *      Use rotas no Express para enviar recursos específicos com base 
 *      no caminho da solicitação e parâmetros:
*/

// responde com diferentes caminhos de rota
app.get("/", (req, res) => res.send("Olá Mundo"));
app.get("/users", (req, res) => res.send("Olá usuários"));

// Parametros
app.get("/users/:userId", (req, res) => {
    res.send(`Olá usuário ${req.params.userId}`);
});

/**
 *      No Express, podemos retornar uma resposta ao usuário quando ele 
 *      faz uma solicitação HTTP. Nos exemplos acima, estou usando 
 *      solicitações get, mas o Express suporta uma série de métodos 
 *      adicionais. Os mais comuns desses métodos são:
 * 
 *          • app.get: solicitar dados
 * 
 *          • app.post: enviar dados
 * 
 *          • app.put: enviar ou atualizar dados    
 *          
 *          • app.delete: excluir dados
*/
app.post("/new", (req, res) => {
    res.send("Solicitação POST para rota `new`");
});

/**
 *      Frequentemente, podemos querer habilitar vários métodos HTTP 
 *      para uma rota específica. Podemos conseguir isso encadeando-os:
*/
app
    .route("/record")
    .get((req, rs) => {
        res.send("Obtém um registro");
    })
    .post((req, res) => {
        res.send("Adiciona um registro");
    })
    .put((req, res) => {
        res.send("Atualiza um registro");
    });

/**
 *      Frequentemente, as solicitações têm parâmetros com valores 
 *      específicos que usaremos em nossa aplicação. Podemos 
 *      especificá-los na URL usando dois pontos (:):
*/
app.get("/users/:userId", (req,res) => {
    res.send(`Olá usuário ${req.params.userId}`);
});

/**
 *      No exemplo acima, quando um usuário visita uma URL em /users/
 *      user123, o navegador irá enviar a resposta de Hello user 
 *      user123. Embora este seja um exemplo simples, também poderíamos 
 *      usar o parâmetro URL para recuperar dados do nosso banco de 
 *      dados, passando as informações para um modelo.
 * 
 *      Também podemos especificar formatos para os parâmetros de 
 *      solicitação. No exemplo a seguir, é utilizado uma expressão 
 *      regular para limitar o parâmetro noteId a um inteiro de seis 
 *      dígitos:
*/
app.get("^/users/:userId/notes/:noteId([0-9]{6})", (req, res) => {
    res.send(`Isso é uma nota ${req.params.noteId}`);
});

/**
 *      Também podemos usar uma expressão regular para definir uma rota 
 *      inteira:
*/
app.get(/.*day$/, (req, res) => {
    res.send(`Todo dia é como ${req.path}`);
});

/**
 *      O exemplo acima irá rotear qualquer solicitação terminando em 
 *      dia. Por exemplo, no desenvolvimento local uma solicitação para 
 *      http://localhost:3000/Domingo resultará em “Todo dia é como 
 *      Domingo” sendo impresso na página.
*/
