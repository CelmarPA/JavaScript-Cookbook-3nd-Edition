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
    static Converter(valor, daUnidade, paraUnidade) {
        LoggerInvisivel.log();

        return valor * daUnidade / paraUnidade;
    }
}

export { Unidades, ConversorComprimento};
