const { ethers } = require("ethers");
const { privateKey } = require('./secrets.json');

const provider = new ethers.providers.JsonRpcProvider(""); // TODO: Insert RPC here
const signer = new ethers.Wallet(privateKey, provider); 

const contractABI = []; // TODO: Contract ABI here
const contractAddress = ""; // TODO: Contract address here

const contract = new ethers.Contract(contractAddress, contractABI, signer);

async function modifyContractData() {
    const tx = await contract.WRITE_FUNCTION(arg1, { value: ethers.utils.parseEther(SEND_AMOUNT).toString(), gasLimit: 1000000 }); // TODO: Function name and arguments
    await tx.wait(); 
    console.log(`Transaction hash: ${tx.hash}`);
}

modifyContractData();