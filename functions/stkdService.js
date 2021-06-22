const { CosmWasmClient } = require('secretjs');

const getSTKDInfo = async () => {
  try {
    const client = new CosmWasmClient('http://api.holodeck.stakeordie.com'); 
    const contractAddress = 'secret1d54dvtpmptzk4snwc405r263ahq0nqr5ajndt5'; 
    const {staking_info} = await client.queryContractSmart(contractAddress,{"staking_info":{"time":1623974345}})

    return staking_info;
  } catch (error) {
    return undefined
  }
}
module.exports = getSTKDInfo;