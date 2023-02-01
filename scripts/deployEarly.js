const hre = require("hardhat");
const fs = require('fs');

async function main() {

  const early = await hre.ethers.getContractFactory("Early");
  const earlyd = await early.deploy();
  await earlyd.deployed();

  console.log(
    `Early deployed to ${earlyd.address}`
  );

fs.writeFileSync('./config.js', `
export const contractAddress = "${earlyd.address}"
export const ownerAddress = "${earlyd.signer.address}"
`)

}

main().
catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
