// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";
import {TimelockControllerUpgradeable} from "@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

// import {ERC1967UpgradeUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/ERC1967/ERC1967UpgradeUpgradeable.sol";

contract TimeLock is
    Initializable,
    // ERC1967UpgradeUpgradeable,
    TimelockControllerUpgradeable
{
    // constructor(
    //     uint256 minDelay,
    //     address[] memory proposers,
    //     address[] memory executors
    // ) TimelockController(minDelay, proposers, executors, msg.sender) {}

    function initialize(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors
    ) public initializer {
        __TimelockController_init(minDelay, proposers, executors, msg.sender);
    }
}
