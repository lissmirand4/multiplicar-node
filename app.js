let argv2 = process.argv;
///console.log(argv);
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs.js').argv;

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Archivo creado:${tabla}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:${archivo}`))
            .catch(e => console.log(e));
        break;
}

/*
const argv = require('./config/yargs').argv;
const { crearArchivo } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`Archivo creado:${tabla}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado:${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}
*/