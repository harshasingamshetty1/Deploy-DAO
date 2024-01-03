const networkConfig = {
  default: {
    name: "hardhat",
  },
  31337: {
    name: "localhost",
  },
  97: {
    name: "testnet",
  },
  56: {
    name: "mainnet",
  },
};

const developmentChains = ["hardhat", "localhost", "testnet"];
const VERIFICATION_BLOCK_CONFIRMATIONS = 6;

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
};
