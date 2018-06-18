const path = require('path')
const fs = require('fs');
const solc = require('solc');
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

const source = fs.readFileSync(inboxPath, 'utf8');


module.exports=solc.compile(source, 1).contracts[':Inbox']; //? ,1 = number of contracts compiled 
//? .contracts[':Inbox'] breaks off the compile Object to view the contracts and specifically the Inbox contract since it is the only contract we are using in this example
//? use solc.compile(source, 1) to see the entire compile object if curious


