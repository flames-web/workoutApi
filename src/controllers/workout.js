const workoutService = require('../services/workout');

module.exports.getAllWorkouts = (req,res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status:'OK',data : allWorkouts});
}

module.exports.getOneWorkout = (req,res) => {
    const workout = workoutService.getOneWorkout()
    res.send('Get an existing workout')
}

module.exports.createNewWorkout = (req,res) => {
    const {name,mode,equipment,exercises,trainerTips} = req.body;
    if(!name||!mode||!equipment||!exercises||!trainerTips){
        return;
    }
    const newWorkout = {
        name,
        mode,
        equipment,
        exercises,
        trainerTips
    }
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status:'Ok',data:createdWorkout})
}

module.exports.updateOneWorkout = (req,res) => {
    const updateWorkout = workoutService.updateOneWorkout()
    res.send('Update an existing workout')
}

module.exports.deleteOneWorkout = (req,res) => {
    workoutService.deleteWorkout(); 
    res.send('Delete an existing workout')
}