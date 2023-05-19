require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
privateKey = process.env.PRIVATE_KEY
quickNode = process.env.QNODE_API

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey],
    },
  },
  paths: {
    url: "quickNode",
    artifacts: "./artifacts",
  },
};
