//SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.8.7;
import "./interfaces/IERC20.sol";
import "./ownable.sol";

contract IotabeeOrder is Ownable {
    address public pool;
    IERC20 public token;
    event Swap(
        bytes32 toCoin,
        bytes32 toAddr,
        uint256 amount,
        uint256 min_amount
    );
    event Collect(bytes32 account, uint256 amount);

    constructor(address _token, address _pool) {
        owner = msg.sender;
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
        emit Swap(toCoin, toAddr, amount, min_amount);
    }

    function collect(bytes32 account, uint256 amount) external {
        token.transferFrom(msg.sender, pool, amount);
        emit Collect(account, amount);
    }
}
