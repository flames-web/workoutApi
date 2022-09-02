const DB = require('./db.json');

module.exports.getAllWorkouts = () => {
    return DB.workouts;
}

module.exports.createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout);
    if(isAlreadyAdded){
        return;
    }
    DB.workouts.push(newWorkout);
    
    
}