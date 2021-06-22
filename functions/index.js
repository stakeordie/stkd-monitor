const functions = require("firebase-functions");
const {stats} = require('./statsCollection')
const {getSTKDInfo} = require('./stkdService')



exports.helloWorld = functions.https.onRequest((request, response) => {
  //Get info from blockchain
  const {staking_info} = getSTKDInfo();
  //Save it in database
  const result  = stats.add(staking_info)

  functions.logger.info("STKD Stakin info save", {structuredData: true});
  response.send("Data has been saved!"+result);
});
