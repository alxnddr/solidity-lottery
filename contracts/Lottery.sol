//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(
            msg.value > .01 ether,
            "minimum amount of 0.01 ether is required"
        );

        players.push(msg.sender);
    }

    function random() private view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.difficulty, block.timestamp, players)
                )
            );
    }

    function pickWinner() public restricted {
        require(
            players.length >= 1,
            "lottery requires at least two participants"
        );
        uint256 index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }

    function getPlayers() public view restricted returns (address[] memory) {
        return players;
    }

    modifier restricted() {
        require(
            msg.sender == manager,
            "only the manager can perform this action"
        );
        _;
    }
}
