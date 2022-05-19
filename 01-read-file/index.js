const fs = require('fs');
const path = require('node:path');

let __line = path.join('01-read-file','text.txt');
let stream = new fs.ReadStream(__line);
stream.setEncoding('utf-8');

stream.on('readable',()=> {
  let data = stream.read();
  console.log(data);
});
