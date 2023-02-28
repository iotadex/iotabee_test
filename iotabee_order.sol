//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.7;
import "./interfaces/IERC20.sol";

contract IotabeeOrder {
    address public pool;
    IERC20 public token;
    event Swap(
        address indexed sender,
        bytes32 toCoin,
        bytes32 toAddr,
        uint256 amount,
        uint256 min_amount
    );
    event Collect(
        address indexed sender,
        bytes32 coin,
        bytes32 account,
        uint256 amount
    );

    constructor(address _token, address _pool) {
        token = IERC20(_token);
        pool = _pool;
    }

    function swap(
        bytes32 toCoin,
        bytes32 toAddr,
        uint256 amount,
        uint256 min_amount
    ) external {
        token.transferFrom(msg.sender, pool, amount);
        emit Swap(msg.sender, toCoin, toAddr, amount, min_amount);
    }

    function collect(
        bytes32 coin,
        bytes32 account,
        uint256 amount
    ) external {
        token.transferFrom(msg.sender, pool, amount);
        emit Collect(msg.sender, coin, account, amount);
    }
}
