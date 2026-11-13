const hre = require("hardhat");
require("dotenv").config();
async function main() {
 const network = await hre.ethers.provider.getNetwork();
 if (network.chainId !== 84532n) throw new Error(`Refusing deployment: expected Base Sepolia (84532), got ${network.chainId}`);
 if (!process.env.DEPLOYER_PRIVATE_KEY) throw new Error("DEPLOYER_PRIVATE_KEY is missing. Configure a test-only wallet in local .env.");
 const supply = BigInt(process.env.PINE_INITIAL_SUPPLY || "1000000000");
 const PineCoin = await hre.ethers.getContractFactory("PineCoin");
 const token = await PineCoin.deploy(supply); await token.waitForDeployment();
 const address = await token.getAddress();
 console.log("PINE Coin deployed to:", address); console.log("Network: Base Sepolia (chainId 84532)");
 console.log("Initial supply:", supply.toString(), "PINE"); console.log("Explorer:", `https://sepolia.basescan.org/address/${address}`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
