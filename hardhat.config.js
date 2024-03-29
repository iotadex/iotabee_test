require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "smrevm1072",
  networks: {
    smr_main: {
      url: "https://json-rpc.evm.shimmer.network",
      accounts: [process.env.BRIDGE_PRIVATEKEY]
    },
    smrevm1072: {
      url: "https://json-rpc.evm.testnet.shimmer.network/",
      accounts: [process.env.RMS_CONTRACT_PRIVATEKEY],
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.RMS_CONTRACT_PRIVATEKEY]
    }
  }
};
