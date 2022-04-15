// https://eth-ropsten.alchemyapi.io/v2/DZOqziGMBD6FkDHhin696tTN8Tax6Rwg

require('@nomiclabs/hardhat-waffle')  // plugin to build smart contract tests using waffle in hardhat

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten : {
      url : "https://eth-ropsten.alchemyapi.io/v2/DZOqziGMBD6FkDHhin696tTN8Tax6Rwg",  //alchemy
      accounts: ['e4ce60ba60c0587c3e9fe2c46264d1d82aa2923ecd959cdad8a64e0d54cea428']  // metamask
    }
  }
}