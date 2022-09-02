const DB = require('./db.json');
const {saveToDatabase} = require('./utils');

module.exports.getAllWorkouts = () => {
    return DB.workouts;
}

module.exports.createNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyAdded){
        throw{
            status:400,
            message:`Workout with this name ${newWorkout.name} already exist`};
    }
    try {
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;  
    } catch (error) {
        throw{status:500,message:error?.message || error}
    }
}

module.exports.getOneWorkout = (workoutId) => {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if(!workout){
        return;
    }
    return workout;
}

module.exports.updateOneWorkout = (workoutId,changes) => {
    const indexForUpdate = DB.workouts.findIndex(workout => workout.id === workoutId)
    if(indexForUpdate === -1){
        return;
    }
    const updatedWorkout = {
        ...DB.workouts[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    }
    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);
}

module.exports.deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex(workout => workout.id === workoutId)
    if(indexForDeletion === -1){
        return;
    }
    DB.workouts.splice(indexForDeletion,1);
    saveToDatabase(DB);
}