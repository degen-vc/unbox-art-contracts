require('dotenv').config()

const HDWalletProvider = require('@truffle/hdwallet-provider')
const { PRIVATE_KEY_DEV, PRIVATE_KEY_PROD, INFURA_TOKEN, ETHERSCAN_API_KEY } = process.env

module.exports = {
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   kovan: {
     provider: () => new HDWalletProvider(PRIVATE_KEY_DEV, `https://kovan.infura.io/v3/${INFURA_TOKEN}`),
     network_id: 42
   }
  },
  
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        "optimizer": {
          "enabled": true,
          "runs": 200
        }
      }
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: ETHERSCAN_API_KEY
  },

  mocha: {
    timeout: 12000000
  }
};
