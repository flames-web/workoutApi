const {v4 : uuid} = require('uuid');
const Workout = require('../database/Workout')

module.exports.getAllWorkouts = (filterParams) => {
    try {
        const allWorkouts = Workout.getAllWorkouts(filterParams);
        return allWorkouts;
    } catch (error) {
        throw error;
    }
}

module.exports.getOneWorkout = (workoutId) => {
    try {
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
}

module.exports.createNewWorkout = (newWorkout) => {
    try {
        const workoutToInsert = {
            ...newWorkout,
            id:uuid(),
            createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        }
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw error;
    }
}

module.exports.updateOneWorkout = (workoutId,changes) => {
    try {
        const updatedWorkout = Workout.updateOneWorkout(workoutId,changes)
        return updatedWorkout;
    } catch (error) {
        throw error;
    }
}

module.exports.deleteWorkout = (workoutId) => {
    try {
        Workout.deleteOneWorkout(workoutId);
    } catch (error) {
        throw error;
    }
}