const CryptoZombies = artifacts.require('CryptoZombies');

module.exports = async function (deployer) {
  await deployer.deploy(CryptoZombies);
};
