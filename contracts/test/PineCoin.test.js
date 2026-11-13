const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("PineCoin", function () {
 it("mints the fixed initial supply to the deployer", async function () {
  const [deployer] = await ethers.getSigners();
  const PineCoin = await ethers.getContractFactory("PineCoin");
  const token = await PineCoin.deploy(1000);
  const expected = ethers.parseUnits("1000", 18);
  expect(await token.name()).to.equal("PINE Coin"); expect(await token.symbol()).to.equal("PINE");
  expect(await token.totalSupply()).to.equal(expected); expect(await token.balanceOf(deployer.address)).to.equal(expected);
 });
});
