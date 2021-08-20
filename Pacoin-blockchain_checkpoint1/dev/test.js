const blockchain = require('./blockchain.js');

const pacoin = new blockchain(); // makes a new instance (or brand ) of our data structure(module)
console.log(pacoin);

// remember .createNewBlock() needs these 3 paramaters: nonce, previousBlockhash, has
pacoin.createNewBlock(12342,'0258EASMN','SWEESA05');
pacoin.createNewBlock(1241,'0258EAASMN','SWEESQWEA05');
pacoin.createNewBlock(34235,'0258EETRSMN','SWERQ23ESA05');
pacoin.createNewBlock(2355,'0258EASSDEMN','SWEE3RQSA05');
pacoin.createNewBlock(35532,'0258EWTEASMN','SWEEGE4GSA05');
pacoin.createNewBlock(53123,'0258EEWEASMN','SWEG4QESA05');

pacoin.createNewTransaction(100,'send122','recipasssa');
pacoin.createNewTransaction(200,'send122','recipasssa');
pacoin.createNewTransaction(300,'send122','recipasssa');

//console.log(pacoin); //regresa todo
//console.log(pacoin.getLastBlock()); //solo regresa el ultimo eslabon de la cadena
// console.log(pacoin.chain); // solo regresa los bloques
// console.log(pacoin.newTransactions); //solo regresa las transacciones

//console.log(pacoin.newTransactions[pacoin.newTransactions.length-1]); // solo regresa la última transaccion
//console.log(pacoin.getLastTransaction()); // solo regresa la última tracción pero por  medio de una función

const previousBlockHash = 'A9089AUD8A8UA8GSDA';
const currentBlockData = [{
    "amount": 50,
    "sender": "ALEX00IIO99GHAHBA1",
    "recipient": "RODRIGOOOIJOI9ABAABAS1",
},
{
    "amount": 150,
    "sender": "ALEX00IIO99GHAHBA2",
    "recipient": "RODRIGOOOIJOI9ABAABAS2",
},
{
    "amount": 5,
    "sender": "ALEX00IIO99GHAHBA3",
    "recipient": "RODRIGOOOIJOI9ABAABAS3",
}
];

//const nonce = 100; // se usa solo cuando queremos ver el ejemplo de hash
/// hash example
//pacoin.hashBlock(previousBlockHash,currentBlockData,nonce);

//console.log(pacoin.hashBlock(previousBlockHash,currentBlockData,nonce));

// proof of work example

pacoin.proofOfWork(previousBlockHash,currentBlockData);

console.log(pacoin.proofOfWork(previousBlockHash,currentBlockData));


// process to check the hash related to the nonce we have in the previous test
let nonce =  pacoin.proofOfWork(previousBlockHash,currentBlockData);
console.log(pacoin.hashBlock(previousBlockHash,currentBlockData,nonce));

console.log(pacoin)