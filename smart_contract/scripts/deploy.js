const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions"); // a factory or a class that generates instances of that contract.
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const runMain = async () => { 
  try {
    await main();
    process.exit(0); // no error
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain(); // this is going to bed executed => call the runMain function => call the main function

// when we run this secret our transactions are going to bed deployed and we get the address of our smart contract deployed on the blockchain network

