"use strict";

/**
 *      Você deseja ler ou gravar em um arquivo armazenado localmente.
 *
 *      A funcionalidade de gerenciamento do sistema de arquivos do Node
 *      está incluída como parte do núcleo do Node, por meio do módulo
 *      fs:
*/
const fs = require("fs");

/**
 *      Para ler o conteúdo de um arquivo, use a função readFile():
*/
fs.readFile("princ.txt", "utf8", (err, dados) => {
    if (err) throw err;
    console.log(dados);
});

/**
 *      Para gravar em um arquivo, use writeFile():
*/
const buff = "Eu vou escrever esse texto em um arquivo";
fs.writeFile("princ2.txt", buff, err => {
    if (err) throw err;
    console.log("Escreveu texto no arquivo");
});

/**
 *      A função writeFile() sobrescreve o arquivo existente. Para 
 *      anexar texto ao arquivo, use appendText():
*/
const buff2 = "\nEu vou adicionar esse texto ao arquivo";
fs.appendFile("princ2.txt", buff2, err => {
    if (err) throw err;
    console.log("Texto anexado ao arquivo");
});

/**
 *      O suporte ao sistema de arquivos do Node é abrangente e simples 
 *      de usar. Para ler de um arquivo, use a função readFile(), que 
 *      suporta os seguintes parâmetros:
 * 
 *          • O nome do arquivo, incluindo o caminho do sistema 
 *            operacional para o arquivo se ele não for local para o
 *            aplicativo
 * 
 *          • Um objeto de opções, com opções para codificação, conforme 
 *            demonstrado na solução, e sinalizador, que é definido como 
 *            r por padrão (para leitura)
 *      
 *          • Uma função de retorno de chamada com parâmetros para um 
 *            erro e os dados lidos
 * 
 *      Na solução, se não fosse especificado a codificação no meu 
 *      aplicativo, o Node teria retornado o conteúdo do arquivo como um 
 *      buffer bruto. Como foi especificado a codificação, o conteúdo do 
 *      arquivo é retornado como uma string.
 * 
 *      As funções writeFile() e appendFile() para escrever e anexar, 
 *      respectivamente, recebem parâmetros semelhantes a readFile():
 * 
 *          • O nome do arquivo e o caminho
 * 
 *          • A string ou buffer para os dados a serem gravados no 
 *            arquivo
 * 
 *          • O objeto options, com opções para codificação (w como 
 *            padrão para writeFile() e a como padrão para appendFile()) 
 *            e modo, com um valor padrão de 438 (0666 em Octal)
 *      
 *          • A função de retorno de chamada, com apenas um parâmetro: o 
 *            erro
 * 
 *      O valor de opções do mode pode ser usado para definir as 
 *      permissões do arquivo se o arquivo foi criado por gravação ou 
 *      anexação. Por padrão, o arquivo é criado como legível e gravável 
 *      pelo proprietário, e legível pelo grupo e pelo mundo.
 * 
 *      Os dados a serem gravados podem ser um buffer ou uma string. Uma 
 *      string não pode lidar com dados binários, então o Node fornece o 
 *      buffer, que é capaz de lidar com strings ou dados binários. 
 *      Ambos podem ser usados ​​em todas as funções do sistema de 
 *      arquivos discutidas nesta seção, mas você precisará converter 
 *      explicitamente entre os dois tipos se quiser usar os dois.
 * 
 *      Por exemplo, em vez de fornecer a opção de codificação utf8 
 *      quando você usa writeFile(), você converte a string em um 
 *      buffer, fornecendo a codificação desejada quando você faz:
*/
const str = "Eu vou escrever esse texto em um arquivo";
const buff3 = Buffer.from(str, "utf8");
fs.writeFile("princBuf.txt", buff3, err => {
    if (err) throw err;
    console.log("Escreveu no arquivo");
});

/**
 *      O inverso, ou seja, converter o buffer em uma string, é 
 *      igualmente simples:
*/
fs.readFile("princBuf.txt", (err, dados) => {
    if (err) throw err;
    const str2 = dados.toString();
    console.log(str2);
});

/**
 *      A função buffer toString() tem três parâmetros opcionais: 
 *      codificação, onde começar a conversão e onde terminá-la. Por 
 *      padrão, o buffer inteiro é convertido usando a codificação utf8.
 * 
 *      As funções readFile(), writeFile() e appendFile() são 
 *      assíncronas, o que significa que elas não esperam a operação 
 *      terminar antes de prosseguir no código. Isso é essencial quando 
 *      se trata de operações notoriamente lentas, como acesso a 
 *      arquivos. Existem versões síncronas de cada uma: readFileSync(), 
 *      writeFileSync() e appendFileSync(). Não posso enfatizar o 
 *      suficiente que você não deve usar essas variações.
 * 
 *      Avançado:
 * 
 *      Outra maneira de ler ou escrever de um arquivo é usar a função 
 *      open() em combinação com read() para ler o conteúdo do arquivo, 
 *      ou write() para escrever no arquivo. As vantagens dessa 
 *      abordagem são um controle mais finito do que acontece durante o 
 *      processo. A desvantagem é a complexidade adicional associada a 
 *      todas as funções, incluindo apenas poder usar um buffer para ler 
 *      e escrever no arquivo.
 * 
 *      Os parâmetros para open() são:
 * 
 *          • Filename and path
 *          • Flag
 *          • Opcional mode
 *          • Função callback
 * 
 *      O mesmo open() é usado com todas as operações, com o flag 
 *      controlando o que acontece. Existem algumas opções de
 *      sinalizadores, mas as que mais nos interessam neste momento são:
 * 
 *          r: Abre o arquivo para leitura; o arquivo deve existir
 * 
 *          r+: Abre o arquivo para leitura e escrita; ocorre uma 
 *              exceção se o arquivo não existir
 * 
 *          w: Abre o arquivo para escrita, trunca o arquivo ou o cria 
 *             se ele não existir
 * 
 *          wx: Abre o arquivo para escrita, mas falha se o arquivo 
 *              existir
 * 
 *          w+: Abre o arquivo para leitura e escrita; cria o arquivo se 
 *              ele não existir; trunca o arquivo se ele existir]
 * 
 *          wx+: Semelhante a w+, mas falha se o arquivo existir
 * 
 *          a: Abre o arquivo para anexação, cria se ele não existir
 * 
 *          ax: Abre o arquivo para anexação, falha se o arquivo existir
 *  
 *          a+: Abre o arquivo para leitura e anexação; cria o arquivo 
 *              se ele não existir
 * 
 *          ax+: Semelhante a a+, mas falha se o arquivo existir
 * 
 *      O modo é o mesmo mencionado anteriormente, um valor que define 
 *      os bits de sticky e permissão no arquivo, se criado, e o padrão 
 *      é 0666. A função de retorno de chamada tem dois parâmetros: um 
 *      objeto de erro, se ocorrer um erro, e um descritor de arquivo, 
 *      usado por operações de arquivo subsequentes.
 * 
 *      As funções read() e write() compartilham os mesmos tipos básicos 
 *      de parâmetros:
 * 
 *          • O descritor de arquivo de retorno de chamada dos métodos 
 *            open()
 * 
 *          • O buffer usado para armazenar dados a serem gravados ou 
 *            anexados, ou lidos
 * 
 *          • O offset onde a operação de entrada/saída (E/S) começa
 * 
 *          • O comprimento do buffer (definido pela operação de
 *            leitura, controla a operação de gravação)
 * 
 *          • Posição no arquivo onde a operação deve ocorrer; null se a 
 *            posição for a posição atual
 * 
 *      As funções de retorno de chamada para ambos os métodos têm três 
 *      argumentos: um erro, bytes lidos (ou escritos) e o buffer.
 * 
 *      São muitos parâmetros e opções. A melhor maneira de demonstrar 
 *      como tudo funciona é criar um aplicativo Node completo que abre 
 *      um arquivo totalmente novo para escrita, escreve algum texto 
 *      nele, escreve mais algum texto nele e então lê todo o texto de 
 *      volta eimprime no  console. Como open() é assíncrono, as 
 *      operações de leitura e escrita precisam ocorrer dentro da função 
 *      de retorno de chamada. Esteja pronto para isso no próximo 
 *      exemplo, porque você vai ter o primeiro gostinho de um conceito 
 *      conhecido como callback hell.
*/
// const fs = require("fs");

fs.open("novoArquivo.txt", "a+", (err, fd) => {
    if (err) {
        throw err
    } else {
        const buff = Buffer.from("A primeira string\n");
        fs.write(fd, buff, 0, buff.length, 0, (err, escrever) => {
            if (err) {
                throw err;
            } else {
                const buff2 = Buffer.from("A segunda string\n");
                fs.write(fd, buff2, 0, buff2.length, buff.length, (err, escrever2) => {
                    if (err) {
                        throw err;
                    } else {
                        const length = escrever + escrever2;
                        const buff3 = Buffer.alloc(length);
                        fs.read(fd, buff3, 0, length, 0, err => {
                            if (err) {
                                throw err;
                            } else {
                                console.log(buff3.toString());
                            }
                        });
                    }
                });
            }
        });
    }
});

/**
 *      Para encontrar o comprimento dos buffers, usei length, que 
 *      retorna o número de bytes para o buffer. Este valor não 
 *      corresponde necessariamente ao comprimento de uma string no 
 *      buffer, mas funciona neste uso.
 * 
 *      Tantos níveis de recuo podem fazer sua pele arrepiar, mas o 
 *      exemplo demonstra como open(), read() e write() funcionam. Essas 
 *      combinações de funções são o que é usado dentro das funções 
 *      readFile(), writeFile() e appendFile() para gerenciar o acesso a 
 *      arquivos. As funções de nível mais alto apenas simplificam as 
 *      operações de arquivo mais comuns.
*/
