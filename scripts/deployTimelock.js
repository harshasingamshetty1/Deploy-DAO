// contract DeployTimeLock is Script {
//     uint256 public constant MIN_DELAY = 1; // 1 block - after a vote passes, you have 1 block before you can enact

//     address[] _proposers;
//     address[] _executors;

//     function run() external {
//         vm.startBroadcast();

//         // Deploy the TimeLock contract
//         new TimeLock(MIN_DELAY, _proposers, _executors);

//         vm.stopBroadcast();
//     }
// }
// scripts/1.deploy_box.ts

const { ethers, upgrades } = require("hardhat");

async function main() {
  const TimeLock = await ethers.getContractFactory("TimeLock");
  console.log("Deploying TimeLock...");
  const timelock = await upgrades.deployProxy(TimeLock, [1, [], []]);

  console.log(timelock.address, " timelock(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(timelock.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(timelock.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
