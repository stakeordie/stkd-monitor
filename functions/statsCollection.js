const functions = require("firebase-functions");
const admin = require('firebase-admin');


const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

const STATS_COLLECTION = 'stkd-stats';

const statsCollection = db.collection(STATS_COLLECTION);


export const stats = {
    add: async (staking_info)=>{
        const statsDocRef = statsCollection.doc();
        const newStat = {
            _id:statsDocRef.id,
            ...staking_info
        }
        statsDocRef.set(newStat);
        return newStat;
    }
}