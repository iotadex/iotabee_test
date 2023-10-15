// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
    const FaucetERC20 = await hre.ethers.getContractFactory("TokenERC20");

    const USDT = await FaucetERC20.deploy("test bsc USDT", "USDT", 18);
    console.log(`USDT was Deployed to : ${USDT.address}`);
    return

    let symbol = "TT1";
    let decimals = 18;
    let tt = await FaucetERC20.deploy(symbol, symbol, decimals);
    console.log(`${symbol} was Deployed to : ${tt.address}`);

    symbol = "TT2"
    decimals = 18;
    tt = await FaucetERC20.deploy(symbol, symbol, decimals);
    console.log(`${symbol} was Deployed to : ${tt.address}`);

    symbol = "TT3"
    decimals = 18;
    tt = await FaucetERC20.deploy(symbol, symbol, decimals);
    console.log(`${symbol} was Deployed to : ${tt.address}`);

    symbol = "TT4"
    decimals = 18;
    tt = await FaucetERC20.deploy(symbol, symbol, decimals);
    console.log(`${symbol} was Deployed to : ${tt.address}`);

    symbol = "USDT"
    decimals = 18;
    tt = await FaucetERC20.deploy(symbol, symbol, decimals);
    console.log(`${symbol} was Deployed to : ${tt.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
