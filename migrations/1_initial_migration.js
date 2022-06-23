const Migrations = artifacts.require("GlobalVar");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
