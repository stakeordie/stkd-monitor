const functions = require("firebase-functions");
const stats = require('./statsCollection')
const getSTKDInfo = require('./stkdService')



exports.updateStats = functions.https.onRequest(async(request, response) => {
  //Get info from blockchain
  const staking_info = await getSTKDInfo();
  //Save it in database
  stats.add(staking_info)

  functions.logger.info("STKD Staking info save", {structuredData: true});
  response.send(`Stats had been updated! `);
});

exports.updateStatsSchedule = functions.pubsub.schedule('every 5 minutes').onRun(async(context) => {
  //Get info from blockchain
  const staking_info = await getSTKDInfo();
  //Save it in database
  stats.add(staking_info)

  functions.logger.info("STKD Staking info save", {structuredData: true}); 

  return null;
});

exports.getStats = functions.https.onRequest(async(request, response) => {
  const {params} = request
  
  if(!params){
    const data = await stats.getAll()
    response.send(data);
  }else{
    const data = await stats.getOrderByDate(parseInt(params[0]));
    response.send(data)
  }
  
  functions.logger.info("Fetched all data", {structuredData: true});
});
