"use strict";
const fs = require("fs");

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
