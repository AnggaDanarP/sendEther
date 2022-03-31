// https://eth-ropsten.alchemyapi.io/v2/iXIA2WJkPg5UW-3uHBih3sDpdJ0KaY3U
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "your api from alchemy",
      accounts: [ 'your private account' ]
    }
  }
};
