const DB = require('./db.json');

module.exports.getRecordForWorkout = (workoutId) => {
    try {
        const record = DB.records.filter(record => record.workout === workoutId);
        if(!record){
            throw{status:400,message:`Cannot find record with the id ${workoutId}`};
        }
        return record;
    } catch (error) {
        throw {status:error?.status || 500, message:error?.message || error}
    }
}

// module.exports.getRecordForMember = (workoutId,memberId) => {
//     try {
//         const record = DB.records.filter(record => record.member === memberId);
//         if() 
//     } catch (error) {
        
//     }
// }