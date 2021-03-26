var Web3 = require('web3');
var net = require('net');
var web3 = new Web3('ws://localhost:8545');

//console.log(web3);


var num_b = web3.hyk.getBlock(1).then(
    console.log()
);
var a = web3.hyk.getBalance("0x3796c0a9b0b8100275f625ebd9a3508bb4cd0ba9")

var num_b = num_b.then(function (result) { console.log(result) })
//console.log(a);
console.log(num_b);


