var KIP7Token = artifacts.require('KIP7Token');

module.exports = async function(deployer) {
  await deployer.deploy(KIP7Token, "Joystick Token", "JOY", 18, web3.utils.toWei((1_000_000_000).toString()));
};
