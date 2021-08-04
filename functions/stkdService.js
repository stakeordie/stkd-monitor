const { CosmWasmClient } = require('secretjs');

const getSTKDInfo = async () => {
  try {
    const client = new CosmWasmClient('http://api.stakeordie.com'); 
    const contractAddress = 'secret18cgnku4dcd8scn56t3ru63ludh3lm0svemul8v';
    const secondsSinceEpoch = Math.round(Date.now() / 1000)
    const {staking_info} = await client.queryContractSmart(contractAddress,{"staking_info":{"time":secondsSinceEpoch}})

    return staking_info;
  } catch (error) {
    return undefined
  }
}
module.exports = getSTKDInfo;