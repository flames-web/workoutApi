const Workout = require('../database/Workout');

module.exports.getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkouts();
    return allWorkouts;
}

module.exports.getOneWorkout = () => {
    return;
}

module.exports.createNewWorkout = () => {
    return;
}

module.exports.updateOneWorkout = () => {
    return;
}

module.exports.deleteWorkout = () => {
    return;
}