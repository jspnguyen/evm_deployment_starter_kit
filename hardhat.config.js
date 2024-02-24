require('@nomiclabs/hardhat-ethers');
require("@nomicfoundation/hardhat-verify");
const { privateKey } = require('./secrets.json');

module.exports = {
solidity: "0.8.1",
defaultNetwork: "", // TODO: Insert default network name
networks: {
        blast_sepolia: {
            url: "",  // TODO: Insert RPC url
            chainId: CHAIN_ID, // TODO: Insert Chain ID
            accounts: [privateKey]
        }
    },
etherscan: {
        apiKey: {
        blast_sepolia: "API_KEY_FILLER", 
        },
        customChains: [{
            network: "", // TODO: Insert network name
            chainId: CHAIN_ID, // TODO: Insert RPC url
            urls: {
            apiURL: "", // TODO: Insert network api url
            browserURL: "" // TODO: Insert network blockscanner url
            }
        }]
    }
}