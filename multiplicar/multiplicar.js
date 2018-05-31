const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let tabla = '';
        for (let d = 1; d <= limite; d++) {
            tabla += `${base} * ${d} = ${base * d} `
        }
        if (tabla != '')
            resolve(tabla);
        else
            reject(console.log(`No se ejecuto la instruccion`));
    });
}


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';
        for (let x = 1; x < 10; x++) {
            data += (`${base} * ${x} =` + base * x + ' ');
        }

        fs.writeFile(`tablas-table-${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(console.log(`El archivo table-${base}.txt ha sido creado`))
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}