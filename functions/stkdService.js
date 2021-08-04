const { CosmWasmClient } = require('secretjs');

const getSTKDInfo = async () => {
  try {
    const client = new CosmWasmClient('http://api.holodeck.stakeordie.com'); 
    const contractAddress = 'secret1mtg8tuqsfvk9ma36tmtz5mc7pae73j0hsc6jla'; 
    const {staking_info} = await client.queryContractSmart(contractAddress,{"staking_info":{"time":1623974345}})

    return staking_info;
  } catch (error) {
    return undefined
  }
}
module.exports = getSTKDInfo;