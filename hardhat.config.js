require('@nomiclabs/hardhat-ethers');
const { privateKey } = require('./secrets.json');

module.exports = {
solidity: "0.8.1",
defaultNetwork: "blast_sepolia", // TODO: Insert network name
networks: {
    blast_sepolia: { // TODO: Insert network name
      url: "", // TODO: Insert RPC here
      chainId: INSERT_CHAIN_ID, // TODO: Insert Chain ID here
      accounts: [privateKey]
    }
  },
}
