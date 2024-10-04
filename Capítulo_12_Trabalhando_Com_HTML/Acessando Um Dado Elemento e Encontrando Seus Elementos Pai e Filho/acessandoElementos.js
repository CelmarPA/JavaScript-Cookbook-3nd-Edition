"use strict";

/**
 *      Você deseja acessar um elemento específico da página da web e, em 
 *      seguida, encontrar seus elementos pai e filho.
 * 
 *      Dê ao elemento um identificador exclusivo:
*/
<div id="demoDiv">
    <p>
        Isso é texto.
    </p>
</div>

/**
 *      Use document.getElementById() para obter uma referência ao 
 *      elemento específico:
*/
const demoDiv = document.getElementById("demoDiv");

/**
 *      Encontre seu pai por meio da propriedade parentNode:
*/
const pai = demoDiv.parentNode;

/**
 *      Encontre seus filhos por meio da propriedade childNodes:
*/
const filhos = demoDiv.childNodes;

/**
 *      Um documento da web é organizado como uma árvore invertida, com o 
 *      elemento mais alto na raiz e todos os outros elementos 
 *      ramificando-se abaixo. Exceto pelo elemento raiz (HTML), cada 
 *      elemento tem um nó pai, e todos os elementos são acessíveis por 
 *      meio do document.
 *      
 *      O objeto de elemento retornado tem um conjunto de métodos e 
 *      propriedades, incluindo vários herdados do objeto de nó. Os 
 *      métodos de nó são principalmente associados à travessia da árvore 
 *      de documentos. Por exemplo, para encontrar o nó pai do elemento, 
 *      use o seguinte:
*/
const parent = document.getElementById("demoDiv").parentNode;

/**
 *      Você pode descobrir o tipo de elemento para cada nó por meio da 
 *      propriedade nodeName:
*/
const tipo = parent.nodeName;

/**
 *      Se você quiser descobrir quais filhos um elemento tem, você pode 
 *      percorrer uma coleção deles por meio de uma NodeList, obtida 
 *      usando a propriedade childNodes:
*/
let stringSaida = "";

if (demoDiv.hasChildNodes()) {
    const children = demoDiv.childNodes;
    children.forEach(child => {
        stringSaida += `tem filho ${child.nodeName} `;
    });
}
console.log(stringSaida);

/**
 *      Dado o elemento na solução, a saída seria:
 *          "tem filho #text tem filho P tem filho #text "
 * 
 *      Você pode se surpreender com o que apareceu como um nó filho. 
 *      Neste exemplo, o espaço em branco antes e depois do elemento de 
 *      parágrafo é ele próprio um nó filho com um nodeName de #text.
 *      
 *      Para o seguinte elemento div:
*/
<div id="demoDiv" class="demo">
    <p>Algum texto</p>
    <p>Mais algum texto</p>
</div>

/**
 *      o elemento demoDiv (nó) tem cinco filhos, não dois:
 * 
 *          tem filho #text
 *          tem filho P
 *          tem filho #text
 *          tem filho P
 *          tem filho #text
*/
