// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  //  const ercUSDT = hre.ethers.utils.getAddress("0xe3569F2091421b02cccbF734d335C7021217D3C8");
  //const pool = hre.ethers.utils.getAddress("0x75e7B3EF46E37C1311Cd5526b0655dC5Ee3B5a3D");
  const ercUSDT = "0x7F74bAd65247D3b5041B362f881c24b15F88ED46";
  const pool = "0x4790f19730eCab51ec7c6a5Ea6Fc878d9630556D";

  const IotabeeOrder = await hre.ethers.getContractFactory("IotabeeOrder");
  const iotabeeOrder = await IotabeeOrder.deploy(ercUSDT, pool);

  await iotabeeOrder.deployed();
  console.log(
    `IotabeeOrder was Deployed to : ${iotabeeOrder.address}`
  );

  const usdt = await hre.ethers.getContractAt("IERC20", ercUSDT)
  await usdt.approve(iotabeeOrder.address, 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFn)
  console.log(`Approved!`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
