// TODO: these are settings for testing. Need some way to switch to "production settings"
const GenesisScheme = artifacts.require("./GenesisScheme.sol");
const SchemeRegistrar = artifacts.require("./SchemeRegistrar.sol");
const UpgradeScheme = artifacts.require("./UpgradeScheme.sol");
const SimpleVote = artifacts.require("./SimpleVote.sol");
const GlobalConstraintRegistrar = artifacts.require("./GlobalConstraintRegistrar.sol");
const MintableToken = artifacts.require("./MintableToken.sol");
const Reputation = artifacts.require("./Reputation.sol");

const getSettings = async function(){
  const genesisScheme = await GenesisScheme.deployed();
  const schemeRegistrar = await SchemeRegistrar.deployed();
  const upgradeScheme = UpgradeScheme.deployed();
  const globalConstraintRegistrar = GlobalConstraintRegistrar.deployed();
  const simpleVote = SimpleVote.deployed();

  return {
    genesisScheme: genesisScheme.address,
    schemeRegistrar: schemeRegistrar.address,
    upgradeScheme: upgradeScheme.address,
    globalConstraintRegistrar: globalConstraintRegistrar.address,
    simpleVote: simpleVote.address,
  }
}

export { getSettings };