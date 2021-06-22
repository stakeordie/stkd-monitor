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
