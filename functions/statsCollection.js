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
            data:{...staking_info}
        }
        statsDocRef.set(newStat);
        return newStat;
    },
    getAll: async ()=>{
        const data = await statsCollection.get();
        return data.docs.map((d)=> d.data());
    },
    getOrderByDate: async (limit=50)=>{
        const data = await statsCollection.orderBy('_date','desc').limit(limit).get();
        return data.docs.map((d)=> d.data());
    },
    get: async (itemId) => {
        return (await statsCollection.doc(itemId).get()).data();
    }
}

module.exports = stats;