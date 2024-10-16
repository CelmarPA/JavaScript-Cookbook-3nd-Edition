"use strict";

/**
 *      Você precisa de um componente que encapsule uma aparência, 
 *      comportamento e comportamento específicos, e que você possa 
 *      incluir tão facilmente quanto incluiria um elemento HTML, mas 
 *      não quer usar uma estrutura da web.
 * 
 *      Considere Web Components, que permitem que você crie elementos 
 *      HTML personalizados e reutilizáveis. Web Components consistem em 
 *      um Template, elementos personalizados e shadow DOM. Cada um será 
 *      abordado na discussão. 
 * 
 *      HTML templates
 *      
 *      O elemento template agora faz parte da especificação HTML5. 
 *      Atualmente, ele é suportado na maioria dos navegadores modernos. 
 *      Dentro do elemento template, incluímos HTML que queremos agrupar 
 *      como um todo que não é instanciado até que seja clonado. Ele é 
 *      analisado quando carregado, para garantir que seja válido, mas 
 *      não existe. Ainda.
 * 
 *      Trabalhar com modelos é muito intuitivo. Considere uma prática 
 *      comum com os aplicativos JavaScript de página única de hoje: 
 *      pegar dados retornados de um serviço da web e formatá-los como 
 *      uma lista não ordenada (ul) (ou novo parágrafo, ou tabela, ou o 
 *      que for). Normalmente, usaríamos os métodos DOM para consultar o 
 *      elemento ul existente, criar cada item de lista (li) na lista, 
 *      anexar texto ao item e anexar o item à lista.
 * 
 *      E se pudéssemos cortar alguns passos? Poderíamos com o template. 
 *      Dado o seguinte HTML:
*/
<template id="hello-world">
    <p>Hello world!</p>
</template>

/**
 *      Este é o JavaScript para adicionar nosso modelo “Hello World” a 
 *      uma página:
*/
const template = document.getElementById("hello-world");
const templateConteudo = template.content;
document.body.appendChild(templateConteudo);

/**
 *      No exemplo, acessamos o elemento template, acessamos o conteúdo 
 *      do elemento HTML, e então o anexamos ao documento HTML usando 
 *      appendChild(). Como observei, templates são muito intuitivos, 
 *      mas você pode estar se perguntando, qual é o sentido? Tudo o que 
 *      fizemos foi adicionar mais código para um processo que já é 
 *      simples, mas templates são importantes para seu uso em Custom 
 *      Elements.
 * 
 *      Custom elements
 * 
 *      A construção de Web Components que gerou mais interesse é o 
 *      elemento personalizado. Em vez de ter que lidar com elementos H
 *      TML existentes e seus comportamentos e aparência padrão, criamos 
 *      um elemento personalizado, empacotamos seu estilo e 
 *      comportamento e apenas o anexamos à página da web. Um elemento 
 *      personalizado pode estender um elemento existente ou ser 
 *      "autônomo", o que significa que é um elemento completamente 
 *      novo. No exemplo a seguir, estenderei o elemento HTML <p> para 
 *      criar um novo elemento chamado <hello-world>. Para fazer isso, 
 *      primeiro preciso definir uma classe com quaisquer métodos 
 *      especiais para o elemento:
*/
class CustomCumprimento extends HTMLParagraphElement {
    constructor() {
        // Sempre chamar super primeiro no construtor
        super();

        // qualquer funcionalidade de elemento adicional pode ser escrita aqui 
    }
}

/**
 *      Uma vez que a classe é definida, eu posso registrar meu 
 *      elemento. Note que o nome do elemento deve conter um hífen para 
 *      evitar quaisquer conflitos potenciais com elementos HTML 
 *      existentes:
*/
customElements.define("custom-cumprimento", CustomCumprimento);

/**
 *      Agora posso usar meu elemento na minha página HTML:
*/
<custom-cumprimento>Hello world</custom-cumprimento>

/**
 *      Shadow DOM
 * 
 *      O shadow DOM é o mais torcido dos Web Components. Mas intrigante 
 *      também.
 * 
 *      Primeiro, as partes não misteriosas. O shadow DOM é um DOM, uma 
 *      árvore de nós, assim como estamos acostumados quando acessamos 
 *      elementos do elemento document. A principal diferença é que ele 
 *      não existe, não de uma forma que sabemos que um DOM existe. 
 *      Quando criamos uma shadow root de um elemento, então ele passa a 
 *      existir. Mas então, o que quer que o elemento costumava ter, 
 *      desaparece. Essa é a chave para lembrar sobre o shadow DOM: 
 *      criá-lo substitui o DOM existente do elemento.
 * 
 *      Usando o método attachShadow, você pode anexar uma raiz de 
 *      sombra a qualquer elemento:
*/
const shadow = element.attachShadow({mode: "open"});

/**
 *      O método attachShadow recebe um parâmetro (mode), que aceita um 
 *      valor de open ou closed. Definir o valor para open permite que 
 *      você ace sse o shadow DOM no contexto da página, como qualquer 
 *      outro elemento. O caso de uso mais comum do shadow DOM é anexar 
 *      um shadow DOM a um elemento custom como parte de seu construtor:
*/
class CustomCumprimento2 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        const cumprimento = this.getAttribute("cumprimento") || "world"
        shadow.innerHTML = `<p>
            Hello, <span class="cumprimento">${cumprimento}</span>
            </p>`;
    }
}

/**
 *      Embora o exemplo acima contenha dois elementos HTML, os estilos 
 *      CSS globais não serão aplicados a um elemento shadow DOM. Para 
 *      estilizar um elemento personalizado com um shadow DOM, nós 
 *      criaríamos um elemento style dentro da classe de elemento 
 *      personalizado e aplicaríamos os estilos:
*/
class CustomCumprimento3 extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        const cumprimento = this.getAttribute("cumprimento") || "world";
        shadow.innerHTML = `<p>
            Hello, <span class="cumprimento">${cumprimento}</span>
        </p>`;

        // Adiciona estilos CSS
        const style = document.createElement("style");

        style.textContent = `
        .wrapper {
            color: pink;
        }
        .cumprimento {
            color: green;
            font-weight: bold;
        }
        `;
    }
}