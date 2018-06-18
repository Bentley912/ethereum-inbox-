const assert = require('assert');
const ganache = require('ganache-cli'); //? CLI for creating a local Ethereum Network 
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); //? provider creates a connection between web3 and local ethereum network (ganache)
const { interface, bytecode } = require('../compile'); 

let accounts;
let inbox;


beforeEach(async () => {
    //? Get a list of 'open' accounts on ganache for testing 
    accounts = await web3.eth.getAccounts();//? Gets open Accounts for Contract Deployment fro Ganache CLI

    inbox  = await  new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi There']})//? Deploys using bytecode from Compile file -- Arguments is the Inital Message which is necessary to deploy new contract
    .send({ from: accounts[0], gas: '1000000' }) //? Sends from open account from Ganache and sets a gas limit 
});

describe('inbox contracts', () => {
    it('deploys contract', () => {
        assert.ok(inbox.options.address);//? Assert ok simply checks the presence of the value 
    });

});
  