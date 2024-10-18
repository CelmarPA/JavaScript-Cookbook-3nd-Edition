const bbarray = {
    concatArray: (str, array) => {
        if (!Array.isArray(array) || array.length === 0) {
            return -1;
        }

        if (typeof str !== "string") {
            return -1;
        }

        return array.map(elemento => {
            return `${str} ${elemento}`;
        });
    },
    splitArray: (str, array) => {
        if (!Array.isArray(array) || array.length === 0) {
            return -1;
        }

        if (typeof str !== "string") {
            return -1;
        }

        return array.map(elemento => {
            return elemento.substring(str.length + 1);
        });
    }
};

module.exports = bbarray;
