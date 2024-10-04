"use strict";

/**
 *      Você deseja indicar uma condição de erro específica gerando um 
 *      objeto de erro personalizado.
 * 
 *      Crie uma classe que herde da classe Error padrão. O construtor 
 *      deve aceitar o texto descritivo para a propriedade message e usar 
 *      super() para chamar o construtor base Error com a mensagem. Aqui 
 *      está um erro personalizado mínimo, com o código que o lança:
 */
class ErroPersonalizado extends Error {
    constructor(message) {
        super(message);
        this.name = "ErroPersonalizado"

        // Melhoria opcional: limpa o rastreamento de pilha, se suportado
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErroPersonalizado);
        }
    }
}

// // Tentar gerar esse erro
// throw new ErroPersonalizado("Um erro específico da aplicação ocorreu");

/**
 *      Há mais um refinamento recomendado, mas opcional. Você pode usar 
 *      o método estático Error.captureStackTrace() para limpar um pouco 
 *      o rastreamento de pilha. (Tecnicamente, captureStackTrace() 
 *      garante que a chamada para o construtor de erro não apareça no 
 *      rastreamento de pilha que está armazenado na propriedade Error.
 *      stack.)
 * 
 *      Você também pode adicionar propriedades personalizadas para 
 *      passar informações extras sobre a condição de erro. Aqui está um 
 *      exemplo que armazena um produtoID após uma pesquisa com falha:
*/
class ProdutoNaoEncontrado extends Error {
    constructor(idProdutoDesaparecido) {
        super(`Produdo ${idProdutoDesaparecido} não existe no catálogo`);

        this.name = "ProdutoNaoEncontrado";
        this.produtoID = idProdutoDesaparecido;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ProdutoNaoEncontrado);
        }
    }
}

try {
    throw new ProdutoNaoEncontrado(420);
} catch (erro) {
    console.log(`Um erro ocorreu com a mensagem: ${erro.message}`);

    if (erro instanceof ProdutoNaoEncontrado) {
        console.log(`Faltando: ${erro.produtoID}`);
    }
}

/**
 *      Ao criar classes Error personalizadas, devemos ter em mente duas 
 *      preocupações possivelmente concorrentes: permanecer dentro dos 
 *      limites de um erro típico do JavaScript e expressar informações 
 *      suficientes para nossa condição de erro personalizada. No 
 *      primeiro caso, não tente recriar os erros ou exceções da sua 
 *      segunda linguagem favorita. Não exagere no tipo Error do 
 *      JavaScript com métodos desnecessários e funcionalidade extra.
 * 
 *      Ao criar um erro personalizado, há algumas convenções a serem 
 *      lembradas:
 * 
 *          • Use o nome da classe para indicar o tipo de erro e defina a 
 *            propriedade name para corresponder. Isso é importante se 
 *            qualquer código verificar o nome para determinar o tipo de 
 *            erro (em vez de usar instanceof). Ele também persiste mesmo 
 *            se o objeto de erro for serializado para JSON e aparecer na 
 *            representação de string padrão do erro e no console do 
 *            desenvolvedor.
 * 
 *          • No construtor, coloque suas propriedades personalizadas 
 *            primeiro na lista de parâmetros. Se você incluir um 
 *            parâmetro de mensagem, ele deve ser o último parâmetro.
 * 
 *          • No construtor, chame super() e passe a mensagem para o 
 *            construtor da classe base.
 * 
 *          • Como um detalhe, defina corretamente o stack trace. 
 *            Verifique o método captureStackTrace(), está presente, 
 *            chame-o, passando uma referência à instância atual (como
 *            this) e sua classe de erro personalizada.
*/
