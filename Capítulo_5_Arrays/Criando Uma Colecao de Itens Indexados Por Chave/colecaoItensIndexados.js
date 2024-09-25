"use strict";

/**
 *      Você quer criar uma coleção onde cada item seja rotulado com uma 
 *      chave de string exclusiva.
 * 
 *      Use o objeto Map. Cada objeto é indexado com uma chave única 
 *      (geralmente, mas não necessariamente, uma string). Para adicionar 
 *      um item, você chama o método set(). Quando você precisa recuperar 
 *      um item específico, você pode pegar exatamente o item que você 
 *      quer usando a chave:
*/
const produtos = new Map();

// Adiciona três novos produtos
produtos.set("RU007",  {nome: "Rain Racer 2000",  preco: 1499.99});
produtos.set("STKY1",  {nome: "Fita Comestível",  preco: 3.99});
produtos.set("P38",  {nome: "Escapamento Veicular (Air)",  preco: 2999.00});

// Verifica por dois itens usando o codigo do item
console.log(produtos.has("RU007")); // true
console.log(produtos.has("RU494")); // false

// Recuperar um item
const produto = produtos.get("P38");

if (typeof produto !== "undefined") {
    console.log(produto.preco); // 2999
}

// Remove o item Fita Comestível
produtos.delete("STKY1");

console.log(produtos.size); // 2

/**
 *      Ao adicionar itens a um objeto Map, você deve sempre usar o 
 *      método set(). Não caia nesta armadilha:
*/
const produtos2 = new Map();

// Não faça isso!
produtos2["RU007"] = {name: "Rain Racer 2000", preco: 1499.99};

/**
 *      Embora isso pareça funcionar a princípio (e usa o mesmo tipo de 
 *      sintaxe que é usada com coleções de nome-valor em muitas outras 
 *      linguagens de programação), na verdade ignora a coleção Map e 
 *      define uma propriedade comum chamada RU007 no objeto Map. Essas 
 *      propriedades não aparecerão se você iterar sobre o Map com um 
 *      loop for…of, e elas não serão visíveis para os métodos has() ou 
 *      get().
 * 
 *      O objeto Map tem um pequeno conjunto de métodos para gerenciar 
 *      seu conteúdo: set(), get(), has() e delete(). Se você quiser 
 *      fazer uso da funcionalidade no objeto Array , você pode 
 *      facilmente converter seu Map em um array com o método estático 
 *      Array.from():
*/
const produtosArray = Array.from(produtos);

console.log(produtosArray[0]); // ['RU007', { nome: 'Rain Racer 2000', preco: 1499.99 }]

/**
 *      Você pode esperar que o produtosArray neste exemplo contenha uma 
 *      coleção de objetos de produto, mas isso não é bem verdade. Em vez 
 *      disso, cada elemento em produtosArray é um array separado com 
 *      dois elementos. O primeiro elemento é a chave (como RUU07), e o 
 *      segundo elemento é o valor (o objeto do produto).
 * 
 *      Em algumas situações, você pode não precisar manter o nome da 
 *      chave ao converter um Map para um array. Talvez a chave não seja 
 *      importante ou esteja duplicada por uma propriedade dos seus 
 *      elementos. Neste caso, você pode escolher transformar sua 
 *      coleção, descartando os valores da chave conforme você copia seus 
 *      dados do Map. Veja como isso funciona:
*/
const produtosArray2 = Array.from(produtos, ([nome, valor]) => valor);

console.log(produtosArray2[0]); // { nome: 'Rain Racer 2000', preco: 1499.99 }
