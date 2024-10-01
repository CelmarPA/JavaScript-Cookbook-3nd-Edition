"use strict";

/**
 *      Você quer encapsular suas classes em um namespace separado para 
 *      facilitar a reutilização e evitar conflitos de nomenclatura com 
 *      outras bibliotecas.
 * 
 *      Use o sistema de módulos introduzido com o ES6. Há três etapas:
 * 
 *          1. Decida qual funcionalidade representa um módulo completo. 
 *             Coloque o código para essas classes, funções e variáveis 
 *             ​​globais em um arquivo de script separado.
 * 
 *          2. Escolha quais detalhes de código você deseja exportar 
 *             (disponibilizar para outros scripts em outros arquivos).
 * 
 *          3. Em outro script, importe os recursos que deseja usar.
 * 
 *      Aqui está um exemplo de um módulo; vamos armazená-lo em um 
 *      arquivo chamado moduloConversorComprimento.js:
*/
const Unidades = {
    Metros: 100,
    Centimetros: 1,
    Quilometros: 100000,
    Jardas: 91.44,
    Pes: 30.48,
    Milhas: 160934,
    Furlongs: 20116.8,
    Elefantes: 625,
    Boeing747s: 7100
};

class LoggerInvisivel {
    static log() {
        console.log("Saudações do logger invisível");
    }
}

class ConversorComprimento {
    static Convert(valor, daUnidade, paraUnidade) {
        LoggerInvisivel.log();

        return valor * daUnidade / paraUnidade;
    }
}

export { Unidades, ConversorComprimento};

/**
 *      A linha importante é a declaração export no final. Ela lista 
 *      todas as funções, variáveis, e classes que serão disponibilizadas 
 *      para outros arquivos de código. Neste exemplo, a constante 
 *      Unidades (na verdade, apenas uma enumeração) e a classe 
 *      ConversorComprimento são disponibilizadas, enquanto a classe 
 *      LoggerInvisivel não é.
 * 
 *      Agora você pode importar a funcionalidade que precisa para outro 
 *      módulo. Você pode escrever este módulo como um arquivo separado 
 *      ou usar um bloco <script> em uma página da web como fazemos aqui.
 *      Mas de qualquer forma, sua tag <script> deve incluir o atributo 
 *      type="module".
*/

/**
 *      Antes de criar uma solução com módulos, há algumas considerações 
 *      que você deve saber:
 * 
 *          • Restrições de segurança do navegador significam que você 
 *            não pode executar um exemplo de módulo do sistema de 
 *            arquivos local. Em vez disso, você precisa hospedar seu 
 *            exemplo em um servidor web de desenvolvimento.
 * 
 *          • Os módulos são bloqueados em seu próprio escopo distinto de 
 *            “módulo”. Você não pode acessar um módulo de um script 
 *            normal não-módulo. Da mesma forma, você não pode acessar 
 *            módulos do console do desenvolvedor.
 * 
 *          • Você não pode acessar módulos do HTML da sua página. Isso 
 *            significa que você não pode conectar um manipulador de 
 *            eventos usando um atributo HTML como onclick, por exemplo,
 *            porque a página não poderá acessar um manipulador de 
 *            eventos que esteja dentro de um módulo. Em vez disso, o 
 *            código do seu módulo precisa alcançar o contexto do 
 *            navegador ao redor usando window ou document.
 * 
 *          • Os módulos são executados automaticamente no modo estrito.
 * 
 *      Os recursos do módulo só podem ser importados para outro módulo. 
 *      Se você quiser criar um bloco <script> para um módulo em uma 
 *      página da web, certifique-se de definir o atributo type como
 *      module, ou o recurso de importação do módulo não funcionará:
 */
<script type="module">

</script>

/**
 *      Ao importar funcionalidade de um módulo, você deve especificar o 
 *      caminho do arquivo do módulo na parte from da declaração import. 
 *      Os módulos suportam um atalho conveniente que permite que você 
 *      inicie caminhos relativos com ./, assim 
 *      ./moduloConversorComprimento.js aponta para o arquivo 
 *      moduloConversorComprimento.js na pasta atual:
*/
import {Unidades, ConversorComprimento} from "./moduloConversorComprimento.js";

/**
 *      Há bastante flexibilidade na nomenclatura que você usa ao 
 *      importar recursos de módulo. Você pode encapsular suas 
 *      importações em um objeto de módulo, que é um tipo especial de 
 *      contêiner que nomeia tudo. Aqui está um exemplo que importa cada 
 *      tipo exportado para um objeto de módulo chamado CConverter:
*/
import * as CConverter from "./moduloConversorComprimento.js";

// Agora você pode acessar ConversorComprimento como CConverter.ConversorComprimento

/**
 *      Observe que nenhuma chave é necessária ao usar objetos de módulo.
 *      Você também pode definir uma exportação padrão no seu módulo:
*/
export default ConversorComprimento;

// E então você pode importá-lo usando qualquer nome:
import CConverter from "./moduloConversorComprimento.js";

/**
 *      O recurso de exportação padrão corresponde a uma funcionalidade 
 *      semelhante em outros sistemas de módulos. Isso torna mais fácil 
 *      para esses módulos serem migrados para o padrão de módulos ES6.
*/
