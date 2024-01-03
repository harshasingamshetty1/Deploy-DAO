const { ethers, network } = require("hardhat");
const { parseEther } = ethers.utils;

// contract DeployParamToken is Script {
//     uint256 public constant INITIAL_SUPPLY = 10000 ether;
//     address public constant RECIPIENT_ONE =
//         0xb98Ee84a0dcECf67399d0bca3C28A105EA0268e5;
//     address public constant RECIPIENT_TWO =
//         0xFB1a8B02b62aa93326dD2fF8916A703E653990Db;

//     function run() external {
//         vm.startBroadcast();

//         // Deploy the ParamToken contract
//         ParamToken paramToken = new ParamToken();

//         // Mint INITIAL_SUPPLY tokens to the deployer's address
//         paramToken.mint(msg.sender, INITIAL_SUPPLY);

//         // Mint INITIAL_SUPPLY tokens to the first recipient
//         paramToken.mint(RECIPIENT_ONE, INITIAL_SUPPLY);

//         // Mint INITIAL_SUPPLY tokens to the second recipient
//         paramToken.mint(RECIPIENT_TWO, INITIAL_SUPPLY);

//         vm.stopBroadcast();
//     }
// }

async function main() {
  console.log("befopre deploy");
  accounts = await ethers.getSigners(); // could also do with getNamedAccounts
  deployer = accounts[0];
  console.log("address = ", deployer.address);
  const TokenContract = await ethers.getContractFactory("ParamToken");
  //   console.log("TOken contract = ", TokenContract);
  tokenContract = await TokenContract.deploy();
  console.log("befopre deploy");

  await tokenContract.deployed();
  accounts = await ethers.getSigners(); // could also do with getNamedAccounts
  deployer = accounts[0];
  console.log("address = ", deployer.address);
  console.log(
    `Token Contract deployed at: ${tokenContract.address} on ${network.name} network`
  );
  const INITIAL_SUPPLY = parseEther("10000");
  const RECIPIENT_ONE = "0xb98ee84a0dcecf67399d0bca3c28a105ea0268e5";
  const RECIPIENT_TWO = "0xfb1a8b02b62aa93326dd2ff8916a703e653990db";
  await tokenContract.mint(deployer.address, INITIAL_SUPPLY);

  await tokenContract.mint(RECIPIENT_ONE, INITIAL_SUPPLY);

  await tokenContract.mint(RECIPIENT_TWO, INITIAL_SUPPLY);
  console.log(
    "token balance of rec 2 = ",
    await tokenContract.balanceOf(RECIPIENT_TWO)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
