// contract DeployParamGovernor is Script {
//     address public constant TOKEN_ADDRESS =
//         0x534422737CeC96554B3815f1b919d0429E841975;
//     address public constant TIMELOCK_ADDRESS =
//         0x89FDA7413C482F0a12a1Fd0ec29EE4B42Eef62BD;

//     function run() external {
//         vm.startBroadcast();

//         // Cast the token address to the IVotes interface as required by the governor constructor
//         IVotes token = IVotes(TOKEN_ADDRESS);

//         // Cast the timelock address to the TimelockController as required by the governor constructor
//         TimelockController timelock = TimelockController(
//             payable(TIMELOCK_ADDRESS)
//         );

//         // Deploy the ParamGovernor contract with the token and timelock
//         new ParamGovernor(token, timelock);

//         vm.stopBroadcast();
//     }
// }

const { ethers, upgrades } = require("hardhat");

async function main() {
  const ParamGovernor = await ethers.getContractFactory("ParamGovernor");
  console.log("Deploying ParamGovernor...");
  const TIMELOCK_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
  const TOKEN_ADDRESS = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const governor = await upgrades.deployProxy(ParamGovernor, [
    TOKEN_ADDRESS,
    TIMELOCK_ADDRESS,
  ]);
  //   const timelock = await upgrades.deployProxy(TimeLock, [1, [], []]);

  console.log(governor.address, " governor(proxy) address");
  console.log(
    await upgrades.erc1967.getImplementationAddress(governor.address),
    " getImplementationAddress"
  );
  console.log(
    await upgrades.erc1967.getAdminAddress(governor.address),
    " getAdminAddress"
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
