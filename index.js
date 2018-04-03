var readline = require('readline');
var colors = require('colors');
//configuracion de colores
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

let numeros=[];
let cantidad=0;
let pos;
let pos2;
let aux;

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Curso2018> ');
rl.question('De cuantas posiciones debe der el arreglo? ', (answer) => {
    cantidad=answer;
    console.log(`Gracias!!, su vector a ordenar sera de : ${answer} posiciones`);
    
    for (let index = 0; index <cantidad-1; index++) {
        rl.question('De cuantas posiciones debe der el arreglo? ', (answer) => {
            
        });
        
        
    };
    console.log('Metodo burbuja');

    rl.close();
  });

/*
*/