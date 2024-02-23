async function main() {
    const Your_Contract = await ethers.getContractFactory('MAIN_CONTRACT_NAME'); // TODO: Insert main contract here
    console.log('Deploying Your_Contract...');
    
    const your_contract = await Your_Contract.deploy();
    
    await your_contract.deployed();
    
    console.log('Your_Contract deployed to:', your_contract.address);
    }
    
    main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });