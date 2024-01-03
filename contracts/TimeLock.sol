// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import {TimelockController} from "@openzeppelin/contracts/governance/TimelockController.sol";
import {TimelockControllerUpgradeable} from "@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract TimeLock is Initializable, TimelockControllerUpgradeable {
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
