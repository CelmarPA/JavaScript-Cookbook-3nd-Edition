function fatorar(numero) {
    if (numero < 0) {
        throw new RangeError(
            `Fatoriais são definidos apenas para números positivos`
        );
    } else if (numero !== Math.trunc(numero)) {
        throw new RangeError(`Fatoriais são definidos apenas para inteiros`);
    } else {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            let resultado = numero;
            while (numero > 1) {
                numero--;
                resultado *= numero;
            }
            return resultado;
        }
    }
}

module.exports = { fatorar };
