const  Record = require('../database/Record');

module.exports.getRecordForWorkouts = (workoutId) => {
    try {
        const record = Record.getRecordForWorkout(workoutId);
        return record;
    } catch (error) {
            throw error;
    }

}