require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const accounts = process.env.DEPLOYER_PRIVATE_KEY ? [process.env.DEPLOYER_PRIVATE_KEY] : [];
module.exports = { solidity: { version: "0.8.24", settings: { optimizer: { enabled: true, runs: 200 } } }, networks: { baseSepolia: { url: process.env.BASE_SEPOLIA_RPC_URL || "https://sepolia.base.org", chainId: 84532, accounts } }, paths: { sources: "./contracts/src", tests: "./contracts/test", cache: "./cache", artifacts: "./artifacts" } };
