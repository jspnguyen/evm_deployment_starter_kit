const { ethers } = require('ethers');
const { MerkleTree } = require('merkletreejs');

function hashAddress(address) {
    return ethers.utils.keccak256(address);
}

function createMerkleRoot(addresses) {
    const leaves = addresses.map(address => hashAddress(ethers.utils.hexZeroPad(address, 32)));
    const merkleTree = new MerkleTree(leaves, hashAddress, { sortPairs: true });
    return merkleTree.getHexRoot();
}

// TODO: Add your WL wallets here
const addresses = [ 
    '0xYourAddress1...',
    '0xYourAddress2...',
    '0xYourAddress3...'
];

const merkleRoot = createMerkleRoot(addresses);
console.log('Merkle Root:', merkleRoot);