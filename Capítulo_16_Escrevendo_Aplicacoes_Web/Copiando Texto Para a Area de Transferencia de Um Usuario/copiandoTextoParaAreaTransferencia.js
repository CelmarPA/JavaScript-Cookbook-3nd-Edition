"use strict";

/**
 *      Seu aplicativo precisa copiar texto, como um link de 
 *      compartilhamento, para a área de transferência do usuário.
 * 
 *      Para copiar texto para a área de transferência de um usuário, 
 *      coloque o texto dentro de um elemento text input ou textarea
 *      e use o método navigator.clipboard.writeText para copiar o texto.
 * 
 *      Em seu HTML, inclua o elemento form e também um botão. No 
 *      exemplo, estou definindo um valor explícito para o elemento 
 *      input. Esse valor também pode ser definido pelo usuário
 *      ou dinamicamente no código:
 * 
 *          <input type="text" id="copia-texto" value="https://example.
 *          com/share/12345">
 *          <button id="copia-botao">Copiar Para a Área de Transferência</
 *          button>
 * 
 *      E no JavaScript correspondente, adicione um manipulador de 
 *      eventos ao elemento do botão. Quando o botão for clicado, use o 
 *      método select para selecionar o texto dentro do elemento
 *      de entrada seguido por navigator.clipboard.writeText() para 
 *      copiar o texto para a área de transferência do usuário
*/
const copiaTexto = document.getElementById("copia-texto");
const copiaBotao = document.getElementById("copia-botao");

const copiarAreaTransferencia = () => {
    copiaTexto.select();
    navigator.clipboard.writeText(copiaTexto.value);
}

copiaBotao.addEventListener("click", copiarAreaTransferencia);

/**
 *      Adicionar texto à área de transferência de um usuário a partir de 
 *      uma caixa de entrada de texto é um padrão de IU comum visto em 
 *      aplicativos da web como GitHub e Google Docs. Este pode ser um 
 *      recurso útil para simplificar o compartilhamento de informações 
 *      ou uma URL para usuários. O padrão de entrada e botão 
 *      demonstrado é o uso mais comum, mas pode haver momentos em que 
 *      você queira copiar uma seleção do usuário do conteúdo da página. 
 *      Neste cenário, pode ser útil ocultar o controle do formulário. 
 *      Para fazer isso, inclua a marcação do conteúdo da página, bem 
 *      como um elemento textarea ou input. 
 */