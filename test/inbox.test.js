const assert = require('assert');
const ganache = require('ganache-cli'); //? CLI for creating a local Ethereum Network 
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); //? provider creates a connection between web3 and local ethereum network (ganache)

beforeEach(() => {
    //? Get a list of 'open' accounts on ganache for testing 
    web3.eth.getAccounts()
    .then(fetchedAccounts => {
        console.log(fetchedAccounts);
    })
});

describe('inbox contracts', () => {
    it('deploys contract', () => {

    }); 
});
  