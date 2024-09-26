"use strict";

/**
 *      Extra: self = this
 *      
 *      Uma alternativa mais antiga ao uso de bind(), e que ainda está em 
 *      uso, é atribuir this a uma variável na função externa, que então 
 *      é acessível à interna. Normalmente, this é atribuído a uma 
 *      variável chamada that ou self:
*/
window.onload = function () {
    window.nome = "window";

    const novoObjeto = {
        nome: "objeto",
        
        digaCumprimento: function () {
            const self = this;
            alert(`Agora isso é fácil ${this.nome}`);
            
            nestedCumprimento = function (cumprimento) {
                alert(cumprimento + " " + self.nome);
            };

            nestedCumprimento("Olá");
        }
    };

    novoObjeto.digaCumprimento("Olá");
};

/**
 *      Sem a atribuição, a segunda mensagem faria referência novamente a 
 *      “window”, não a “objeto”.
*/