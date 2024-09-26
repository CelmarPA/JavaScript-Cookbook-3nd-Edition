"use strict";

/**
 *      Este exemplo é uma página da web que usa setTimeout() para 
 *      executar uma operação de contagem regressiva de 10 a 0. Conforme 
 *      os números são contados, eles são inseridos na página da web. 
 *      Este exemplo também usa o padrão construtor para criação de 
 *      objetos para criar uma função Contador semelhante a uma classe.
*/

// Esta é a função  construtora para o objeto Contador
function Contador(de, para, divElemento) {
    this.contagemAtual = de;
    this.contagemFinal = para;
    this.elemento = divElemento;

    // O método decrementarContador() atualiza a página
    this.decrementarContador = function () {
        this.contagemAtual -= 1;
        this.elemento.textContent = this.contagemAtual;

        if (this.contagemAtual > this.contagemFinal) {
            // Agenda essa função para executar novamente após 1 segundo.
            setTimeout(this.decrementarContador.bind(this), 1000);
        }
    };

    // Método para começar a contagem
    this.comecaContagem = function () {
        this.decrementarContador();
    }
}

// Cria o contador para a está pagina
const contador = new Contador(10, 0, document.getElementById("contadorDiv"));

// Quando a página carregar, começa a contagem.
window.onload = function () {
    contador.comecaContagem();
};

/**
 *      Se a função setTimeout() no exemplo de código fosse a seguinte:
 * 
 *          setTimeout(this.incrementCounter, 1000);
 * 
 *      ele perderia this, e a função callback não seria capaz de acessar 
 *      variáveis ​​como contagemAtual, mesmo que o método 
 *      decrementarContador() faça parte do mesmo objeto.      
*/
