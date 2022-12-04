var PartiLivro = artifacts.require("./PartiLivro.sol");

module.exports = function(deployer) {
  deployer.deploy(PartiLivro);
};