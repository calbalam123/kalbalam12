// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
/// @title PINE Coin
/// @notice Fixed-supply ERC-20 token for PINE Crypto testnet development.
contract PineCoin is ERC20 {
    uint256 public immutable initialSupply;
    constructor(uint256 initialSupplyWholeTokens) ERC20("PINE Coin", "PINE") {
        require(initialSupplyWholeTokens > 0, "Supply must be positive");
        uint256 supply = initialSupplyWholeTokens * 10 ** decimals();
        initialSupply = supply;
        _mint(msg.sender, supply);
    }
}
