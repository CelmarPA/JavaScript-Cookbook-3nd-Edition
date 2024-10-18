const bbarray = {
    concatArray: (str, array) => {
        return array.map(elemento => {
            return `${str} ${elemento}`
        });
    },
    splitArray: (str, array) => {
        return array.map(elemento => {
            return elemento.substring(str.length + 1);
        });
    }
};

module.exports = bbarray;
exports.concatArray = bbarray.concatArray;
exports.splitArray = bbarray.splitArray;
