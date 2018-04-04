
const readline = require('readline');
const ordenar= require('./lib/ordenamiento');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'sebaLesca> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'burbuja':
    let vector=[9,8,6,7,3,1];
      ordenar.burbuja(vector,function(error,vector){
          console.dir(vector);

      }) 
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});
