// https://eth-ropsten.alchemyapi.io/v2/iXIA2WJkPg5UW-3uHBih3sDpdJ0KaY3U
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/iXIA2WJkPg5UW-3uHBih3sDpdJ0KaY3U",
      accounts: [ '294807eb263610c87ab3f69231986e640aecb24d81f50d82963da0abdb638dc8' ]
    }
  }
};
