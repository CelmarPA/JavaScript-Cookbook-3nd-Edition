"use strict";

/**
 *      Você quer incorporar vídeo em sua página da web junto com uma 
 *      aparência consistente para os controles de vídeo,
 *      independentemente do navegador e do sistema operacional.
 * 
 *      Use o elemento video do HTML5:
 * 
 *          <video id="prado" poster="purples.jpg" >
 *              <source src="meadow.m4v" type="video/mp4"/>
 *              <source src="meadow.ogv" type="video/ogg" />
 *          </video>
 * 
 *      Você pode fornecer controles para ele via JavaScript, como 
 *      mostrado no exemplo a seguir. Botões são usados ​​para fornecer 
 *      o controle de vídeo, e texto em um elemento div é usado para 
 *      fornecer feedback sobre o tempo durante a reprodução.
*/

// elementos DOM
const prado = document.getElementById("prado");
const iniciar = document.getElementById("iniciar");
const parar = document.getElementById("parar");
const pausar = document.getElementById("pausar");

// Inicia o vídeo, habilita parar e pausar e desabilita iniciar
function iniciarPlayback() {
    prado.play();
    pausar.disabled = false;
    parar.disabled = false;
    this.disabled = true;
}

// Pausa o vídeo, habilita iniciar, desabilita parar e pause
function pausarPlayback() {
    prado.pause();
    pausar.disabled = true;
    iniciar.disabled = false;
    parar.disabled = true;
}

// Para o vídeo, retorna o tempo para 0, habilita o iniciar e desabilita pausar e parar
function pararPlayback() {
    prado.pause();
    prado.currentTime = 0;
    iniciar.disabled = false;
    pause.disabled = true;
    parar.disabled = true;
}

// Para cada tempo divisível por 5, produz feedback
function reportarProgresso() {
    const tempo = Math.round(this.currentTime);
    const div = document.getElementById("feedback");
    div.innerHTML = `${tempo} segundos`;
}

// Cria os manipuladores de eventos
iniciar.addEventListener("click", iniciarPlayback);
parar.addEventListener("click", pararPlayback);
pausar.addEventListener("click", pausarPlayback);
prado.addEventListener("timeupdate", reportarProgresso);

/**
 *      O elemento de vídeo HTML5, assim como o elemento de áudio 
 *      HTML5, pode ser controlado com seus próprios controles 
 *      integrados, ou você pode fornecer os seus próprios. Os 
 *      elementos de mídia suportam os seguintes métodos:
 * 
 *          play: Inicia a reprodução do vídeo
 * 
 *          pause: Pausa o vídeo
 * 
 *          load: Pré-carrega o vídeo sem iniciar a reprodução
 * 
 *          canPlayType: Testa se o agente do usuário suporta o tipo de 
 *                       vídeo
 * 
 *      Os elementos de mídia não suportam um método stop, então o  
 *      código emula um pausando a reprodução do vídeo e então 
 *      definindo o atributo currentTime do vídeo como 0, o que 
 *      basicamente redefine o tempo de início da reprodução. Eu também 
 *      usei currentTime para imprimir o tempo do vídeo, usando Math.
 *      round para arredondar o tempo para o segundo mais próximo.
 * 
 *      O controle de vídeo está fornecendo dois codecs de vídeo 
 *      diferentes: H.264 (.mp4) e VP8 (.webm). Quase todos os 
 *      navegadores modernos suportam o formato de arquivo WebM, mas 
 *      incluir o MP4 fornece um fallback para navegadores mais antigos 
 *      que suportam o elemento de vídeo.
 * 
 *      Os controles de vídeo e áudio são inerentemente acessíveis pelo 
 *      teclado. Se você substituir os controles, você vai querer 
 *      fornecer informações de acessibilidade com suas substituições.
*/
