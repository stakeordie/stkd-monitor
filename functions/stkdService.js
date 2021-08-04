const { CosmWasmClient } = require('secretjs');

const getSTKDInfo = async () => {
  try {
    const client = new CosmWasmClient('http://api.holodeck.stakeordie.com'); 
    const contractAddress = 'secret1mtg8tuqsfvk9ma36tmtz5mc7pae73j0hsc6jla';
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const {staking_info} = await client.queryContractSmart(contractAddress,{"staking_info":{"time":secondsSinceEpoch}})

    return staking_info;
  } catch (error) {
    return undefined
  }
}
module.exports = getSTKDInfo;