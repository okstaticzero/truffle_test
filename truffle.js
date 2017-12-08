var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic =
  "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // match any network
    },
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic,
        "https://ropsten.infura.io/O6RgsnSXnDNSIphAx6pn"
      ),
      network_id: 3,
      gas: 4600000,
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    }
  }
};
