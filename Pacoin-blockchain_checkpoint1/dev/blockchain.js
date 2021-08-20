//  this is our blockchain data structure

const sha256 = require('js-sha256');

// this is a 'constructor' function... data object
function blockchain(){
    this.chain = []; // initialize the chain to an empty array. we will store all of our blocks here.
    this.newTransactions = []; //hold all the new transactions before they are 'mined' into a block

    this.createNewBlock(100,'0','0'); // GENESIS BLOCK!

};

blockchain.prototype.createNewBlock = function (nonce, previousBlockHash ,hash) {
    //all of these terms will be revealed
    const newBlock ={
        index: this.chain.length +1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        // all of the transactions in this block
        nonce: nonce,
        // a nonce is a number only used once(2,10,1232349), this is the PROOF that we actually created a legit. block
        hash: hash,
        // the data from our new block.
        previousBlockHash: previousBlockHash
        // the hash from the previous 
    };

    this.newTransactions = [];
    // clears out any newTransactions
    this.chain.push(newBlock);
    // add the newBlock to the chain

    return newBlock;

};

blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length -1];
};

blockchain.prototype.getLastTransaction = function (){
    return this.newTransactions[this.newTransactions.length-1]
}

blockchain.prototype.createNewTransaction = function(amount, sender, recipient) {
    // create a newTransaction object
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
    };

    // add the new transaction to the new transactions data area
    this.newTransactions.push(newTransaction)

    return this.getLastBlock()['index']+1;
    // get the index of the last block of our chian plus one, for a new block.
};

blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData,nonce){

    //what does this method do? take the blockData ==> some hash result
    // for example:. "cat" ==>77af778b51abd4a3c51c5ddd97204a9c3ae614ebccb75a606c3b6865aed6744e

    //smoosh all of our 3 parameters into one long string
    const dataAsSrting = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);

    // pass all of our dat as string in our new, js-sha256 library
    const hash = sha256(dataAsSrting);

    return hash;
};

blockchain.prototype.proofOfWork = function(previousBlockHash,currentBlockData){
    let nonce = 0; // start are zero, use the let keyword becuse this is gonna change.

    // create a hash running the hashBlock() method with our default nonce of zero
    let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);

    //excecute the code {...} while this condition is true
    while (hash.substring(0, 4) !== '0000'){ // business rule
        nonce++; // nonce = nonce +1
        hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
    }

    return nonce;
}




module.exports = blockchain;