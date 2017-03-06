var fs = require('fs');
var fileToRead = './public/main.css';
var filePath = './public/';
var tmpFileName = (Math.random() * 10000).toString().substring(0,4) + '.txt';
fs.writeFileSync(filePath + tmpFileName,'testStuff');

// fs.readFile(fileToRead, function(err, data)
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else console.log(data.toString());

// });
console.log(tmpFileName);