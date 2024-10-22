"use strict";

/**
 *      Seu aplicativo Node precisa responder a solicitações HTTP.
 * 
 *      Instale o pacote Express:
 * 
 *          $ npm install express
 * 
 *      Para configurar o Express, precisamos do módulo, chamamos o 
 *      módulo e especificamos uma porta para conexões em um arquivo 
 *      chamado index.js:
*/
const express = require("express");

const app = express();

const port = process.env.PORT || "3000";

app.listen(port, () => console.log(`Ouvindo a porta ${port}`));

/**
 *      Para responder a uma solicitação, especifique uma rota e a 
 *      resposta usando o método .get do Express:
*/
app.get("/", (req, res) => res.send("Olá mundo"));

/**
 *      Para servir arquivos estáticos, podemos especificar um 
 *      diretório com o meio-termo express.static
*/

// meio-termo para arquivos estáticos servirá arquivos estáticos do diretório 'files'
app.use(express.static("files"));

/**
 *      Para responder com HTML gerado a partir de um modelo, primeiro 
 *      instale o mecanismo de criação de modelos:
 * 
 *          $ npm install pug --save
 * 
 *      Em seguida, no arquivo index.js, defina o mecanismo de 
 *      visualização e especifique a rota que responderá com o 
 *      conteúdo do modelo:
*/
app.set("view engine", "pug")

app.get("/template", (req, res) => {
    res.render("template");
});

/**
 *      E então crie um arquivo de modelo no subdiretório views do 
 *      projeto com um novo arquivo. O nome do arquivo de modelo deve 
 *      corresponder ao nome especificado em res.render. Em views/  
 *      template.pug:
 *          
 *          html
 *              head 
 *                  title="Usando Express"
 *              body 
 *                  h1="Olá mundo"
 * 
 *      Agora, as solicitações para http://localhost:3000/template 
 *      retornarão o conteúdo do modelo como HTML.
 * 
 *      Express é uma estrutura minimalista, mas altamente configurável 
 *      para responder a solicitações HTTP e construir aplicativos da 
 *      web. No exemplo, definimos a porta para process.env.PORT ou 
 *      porta 3000. No desenvolvimento, podemos então especificar uma 
 *      nova por  ta usando uma variável de ambiente, como:
 *
 *          $ PORT=7777 node index.js 
 * 
 *      ou usando um arquivo .env pareado com o módulo dotenv Node. Ao 
 *      implementar o aplicativo, a plataforma de hospedagem do 
 *      aplicativo pode exigir um número de porta específico ou 
 *      permitir que configuremos o número da porta nós mesmos.
 * 
 *      Com o método Express get, o aplicativo recebe uma solicitação 
 *      para um URI específico e então responde. Em nosso exemplo, 
 *      quando o aplicativo recebe uma solicitação para o URI raiz (/), 
 *      respondemos com o texto “Olá mundo”.
 * 
 *      Essas respostas também podem ser HTML, modelos renderizados 
 *      para HTML, arquivos estáticos e dados formatados (como JSON ou 
 *      XML).
 * 
 *      Devido à sua natureza mínima, o Express em si contém 
 *      funcionalidade mínima, mas pode ser estendido usando 
 *      middleware. No Express, as funções de middleware têm acesso aos 
 *      objetos de solicitação e resposta. O middleware de nível de 
 *      aplicativo é vinculado a uma instância do objeto de aplicativo 
 *      por meio de app.use(MIDDLEWARE). No exemplo, estamos usando
 *      o middleware de arquivos estáticos integrado.
 * 
 *      Pacotes de middleware podem ser usados ​​para estender a 
 *      funcionalidade do Express de muitas maneiras. O pacote de 
 *      middleware Helmet pode ser usado para melhorar a segurança do 
 *      Express padrões:
*/
const express = require("express");
const helmet = require("helmet");

const app1 = express();

app1.use(helmet());

/**
 *      Os mecanismos de template simplificam o processo de escrever 
 *      HTML e permitem que você passe dados do seu aplicativo para a 
 *      página.
 * 
 *      Aqui estou passando os dados do objeto usuarDados para o 
 *      template encontrado em views/user.pug, que será acessível na 
 *      rota /user.
*/

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

/**
 *      Então, em nosso modelo, podemos usar os dados:
*/

/*
html
    head
        title Página Usuário
    body
        h1 Perfil de #{usuarDados.nome}
        ul
            li 
                image(src=usuarDados.avatar)
            li #{usuarDados.nome}
            li #{usuarDados.email}
*/

/**
 *      O mecanismo de modelagem Pug é mantido pela equipe principal do 
 *      Express e é uma escolha popular para aplicativos Express, mas 
 *      sua sintaxe orientada a espaços em branco não é para todos. O 
 *      EJS é uma excelente alternativa que oferece uma sintaxe mais 
 *      parecida com HTML. Veja como o exemplo acima ficaria usando o 
 *      EJS.
 * 
 *      Primeiro, especifique para instalar o pacote ejs:
 *          $ npm install ejs
 * 
 *      Depois, defina o EJS como o mecanismo de visualização em seu 
 *      aplicativo Express:
*/
app.set("view engine", "ejs");

/**
 *      E em views/user.ejs:
*/

/*
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <title>Página Usuário</title>
  </head>
  <body>
    <h1> Perfil <%= usuarDados.nome %></h1>
    <ul>
      <li><img src=<%= usuarDados.avatar %> /></li>
      <li><%= usuarDados.nome %></li>
      <li><%= usuarDados.email %></li>
    </ul>
  </body>
</html>
*/
