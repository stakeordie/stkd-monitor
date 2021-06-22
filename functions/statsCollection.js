const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();

const FieldValue = admin.firestore.FieldValue;

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

const STATS_COLLECTION = 'stkd-stats';

const statsCollection = db.collection(STATS_COLLECTION);


const stats = {
    add: async (staking_info)=>{
        const statsDocRef = statsCollection.doc();
        const newStat = {
            _id:statsDocRef.id,
            _date:FieldValue.serverTimestamp(),
            info:{...staking_info}
        }
        statsDocRef.set(newStat);
        return newStat;
    }
}

module.exports = stats;