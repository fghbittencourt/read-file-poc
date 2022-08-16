const fs = require('fs');

const file = 'updateCSV.csv';
console.log('NODE - VAMO LÁ');
console.time('Total time ');

const data = fs.readFileSync(file, 'utf8');

data.split('\n').forEach(line => {
  console.log(line);
});

console.timeEnd('Total time ');

// // // Versao async turbinada
// // const reader = fs.createReadStream(file, { encoding: 'utf8' });

// // reader
// //   .on('data', chunk => {
// //     conteudo.push(chunk.toString());
// //     count += 1;
// //   })
// //   .on('end', () => {
// //     conteudo.forEach(linha => {
// //       console.log(linha);
// //     });

// //     console.timeEnd('Total time ');
// //     console.log(`Count: ${count}`);
// //   });
