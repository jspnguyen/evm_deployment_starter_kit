# EVM Contract Deployment Starter Kit

## Setup

1. Initialize directory assuming you are already in your working directory
```terminal
npm init -y
```

2. Install Hardhat
```terminal
npm install hardhat
```

3. Create Hardhat project
```terminal
npx hardhat
```

4. Install Ethers.js
```terminal
npm install @nomiclabs/hardhat-ethers ethers
```

4. Compile your contract
```terminal
npx hardhat compile
```

5. Deploy your contract
```terminal
npx hardhat run scripts/deploy.js --network <NETWORK_NAME>
```