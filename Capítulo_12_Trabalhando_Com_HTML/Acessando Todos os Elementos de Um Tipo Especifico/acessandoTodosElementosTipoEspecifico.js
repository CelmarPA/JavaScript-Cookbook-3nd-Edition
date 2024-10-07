"use strict";

/**
 *      Você deseja acessar todos os elementos img em um determinado 
 *      documento.
 * 
 *      Use o método document.getElementsByTagName(), passando img 
 *      como o parâmetro:
*/
const elementosImg = document.getElementsByTagName("img");

/**
 *      O método document.getElementsByTagName() retorna uma coleção 
 *      de nós (uma NodeList) de um determinado tipo de elemento, como 
 *      a tag img na solução. A coleção pode ser percorrida como um 
 *      array, e a ordem dos nós é baseada na ordem dos elementos 
 *      dentro do documento (o primeiro elemento img na página é 
 *      acessível no índice 0, etc.):
*/
for (let i = 0; i < elementosImg.length; i++) {
    const img = elementosImg[i];
    console.log(img);
}

/**
 *      Uma coleção NodeList pode ser percorrida como um array, mas
 *      não é um objeto Array. Você não pode usar métodos de objeto 
 *      Array, como push() e reverse(), com um NodeList. Sua única 
 *      propriedade é length, e seu único método é item(), retornando 
 *      o elemento na posição dada por um índice passado como um
 *      parâmetro:
*/
const img = elementosImg.item(1); // segunda imagem

/**
 *      NodeList é um objeto intrigante porque é uma coleção ativa, o 
 *      que significa que as alterações feitas no documento após a 
 *      recuperação do NodeList são refletidas na coleção.
 * 
 *      No exemplo, três imagens na página da web são acessadas como 
 *      uma coleção NodeList usando o método getElementsByTagName. A 
 *      propriedade length, com um valor de 3, é enviada para o 
 *      console. Imediatamente depois, um novo parágrafo e elementos 
 *      img são criados, e o img é anexado ao parágrafo. Para anexar o 
 *      parágrafo após os outros na página, getElementsByTagName é 
 *      usado novamente, desta vez com as tags de parágrafo
 *      (p). Não estamos realmente interessados ​​nos parágrafos, mas 
 *      nos elementos pais dos parágrafos, encontrados por meio da 
 *      propriedade parentNode em cada parágrafo.
 * 
 *      O novo elemento de parágrafo é anexado ao elemento pai do 
 *      parágrafo, e a propriedade length da coleção NodeList acessada 
 *      anteriormente é novamente impressa. Agora, o valor é 4, 
 *      refletindo a adição do novo elemento img.
 * 
 *      Além de usar getElementsByTagName() com um tipo de elemento 
 *      específico, você pode também passar o seletor universal (*) 
 *      como um parâmetro para o método para obter todos os elementos:
*/
const todosElementos = document.getElementsByTagName("*");
