const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(''); // TODO: Insert RPC here

const contractABI = []; // TODO: Contract ABI here
const contractAddress = ''; // TODO: Contract address here

const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function readFromContract() {
    try {
        const result = await contract.READ_FUNCTION(arg1); // TODO: Read function here with args
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

readFromContract();