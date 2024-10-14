/**
 *      Você deseja fornecer um arquivo de áudio e, em seguida, 
 *      compartilhar informações adicionais quando o arquivo de áudio 
 *      começar ou terminar de ser reproduzido.
 *      
 *      Use o elemento de audio do HTML5 e capturar seu evento de 
 *      reprodução (a reprodução começou) ou evento de término (a 
 *      reprodução terminou):
*/
function sobreAudio() {
    const informacao = "Um campo de verão perto de um lago em julho.";
    const texto = document.createTextNode(informacao);
    const div = document.createElement("div");
    div.appendChild(texto);
    document.body.appendChild(div)
}

const prado = document.getElementById("prado");
prado.addEventListener("play", sobreAudio);

/**
 *      O HTML5 adicionou dois elementos de mídia: áudio e vídeo. Esses 
 *      controles simples de usar fornecem uma maneira de reproduzir 
 *      arquivos de áudio e vídeo.
 * 
 *      Na solução, o atributo Booleano controls do elemento de áudio é 
 *      definido, então os controls são exibidos. O elemento tem um src 
 *      de um arquivo de áudio WAV para reprodução no navegador. Além 
 *      disso, um link para o arquivo WAV é fornecido como reserva, o 
 *      que significa que as pessoas usando navegadores que não 
 *      suportam áudio ainda podem acessar o arquivo de som. Poderia 
 *      ter também ter sido fornecido um elemento de objeto ou outro 
 *      conteúdo de reserva.
 * 
 *      Os elementos de mídia vêm com um conjunto de métodos para 
 *      controlar a reprodução, bem como eventos que podem ser 
 *      acionados quando o evento ocorre. Na solução, o evento 
 *      encerrado é capturado e atribuído ao manipulador de eventos 
 *      sobreAudio(), que exibe uma mensagem sobre o arquivo após o 
 *      término da reprodução. Observe que, embora o código esteja 
 *      usando um manipulador de eventos DOM Nível 0 com o evento de 
 *      carregamento da janela, ele está usando o manipulador de 
 *      eventos DOM Nível 2 com o elemento de áudio. O suporte do 
 *      navegador é irregular com este manipulador de eventos, então eu 
 *      recomendo fortemente que você use addEventListener(). No 
 *      entanto, onended parece funcionar sem problemas quando usado 
 *      diretamente no elemento:
 * 
 *          <audio id="prado" src="meadow.wav" controls onended="alert 
 *          ('Tudo feito')">
 *              <p><a href="meadow.wav">Sons do Prado</a></p>
 *          </audio>
*/
