let fs = require('fs');

var output = fs.readFileSync('file_playground.txt', 'utf8')
.trim()
.split('\n')
// .map(line => line.split('\t'))
// .reduce((customers, line) => {
//     customers[line[0]] =  customers[line[0]] || []
//     customers[line[0]].push({
//         name: line[1],
//         price: line[2],
//         quantity: line[4]
//     })
//     return customers
// }, {})

output1 = JSON.stringify(output, null, 2)

console.log( output1)