"use strict";

/**
 *      Você deseja abrir um arquivo de imagem e exibir os metadados no 
 *      navegador.
 * 
 *      Use a API de arquivo:
*/
const entradaElemento = document.getElementById("arquivo");

function manipularArquivo() {
    // Lê o conteúdo do arquivo
    const arquivo = this.files[0];
    const leitor =  new FileReader();
    
    // Adiciona ouvinte de evento 'load'
    leitor.addEventListener("load", evento => {
        // Ua vez carregado, faça algo com o conteúdo do arquivo
    });
    leitor.readAsDataURL(arquivo);
}

entradaElemento.addEventListener("change", manipularArquivo, false);

/**
 *      A File API se conecta ao tipo de arquivo de elemento de entrada 
 *      existente, usado para upload de arquivo. Além da capacidade de 
 *      fazer upload do arquivo para o servidor por meio de um upload de 
 *      formulário, você agora pode acessar o arquivo diretamente em 
 *      JavaScript e trabalhar com ele localmente ou fazer upload do    
 *      arquivo para um servidor.
 * 
 *      Há três objetos na API File:
 * 
 *          FileList: Uma lista de arquivos para carregar via input 
 *                    type="file"
 * 
 *          File: Informações sobre um arquivo específico
 *  
 *          FileReader: Objeto para carregar o arquivo de forma 
 *                      assíncrona para acesso do lado do cliente
 * 
 *      Cada objeto tem propriedades e eventos associados, incluindo a 
 *      capacidade de rastrear o progresso de um upload de arquivo (e 
 *      fornecer uma barra de progresso personalizada), bem como 
 *      sinalizar quando o upload for concluído. O objeto File pode 
 *      fornecer informações sobre o arquivo, incluindo o nome do 
 *      arquivo, tamanho e tipo MIME. O objeto FileList fornece uma 
 *      lista de objetos File, porque mais de um arquivo pode ser 
 *      especificado se o elemento input tiver o atributo multiple 
 *      definido. O FileReader é o objeto que faz o upload real do 
 *      arquivo.
*/