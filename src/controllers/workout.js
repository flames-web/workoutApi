const workoutService = require('../services/workout');

module.exports.getAllWorkouts = (req,res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({status:'OK',data : allWorkouts});
    } catch (error) {
        res.status(error?.status || 500)
           .send({status:'Failed',data:{error: error?.message || error}})
    }
}

module.exports.getOneWorkout = (req,res) => {
    try {
        const workout = workoutService.getOneWorkout()
        res.send({status:'OK',data:workout});
    } catch (error) {
        res.status(error?.status || 500)
           .send({status:'Failed',data:{error: error?.message || error}})
    }
}

module.exports.createNewWorkout = (req,res) => {
    const {name,mode,equipment,exercises,trainerTips} = req.body;
    if(!name||!mode||!equipment||!exercises||!trainerTips){
        res.status(400).send({status:'Failed',data:{
            error:"One of the following is missing or is empty in request body: 'name', 'mode','equipment' ,'exercices','trainerTips'",
        }})
        return;
    }
    const newWorkout = {
        name,
        mode,
        equipment,
        exercises,
        trainerTips
    }
    try {
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({status:'Ok',success: 'Sucessfully Created a new workout', data:createdWorkout})
    } catch (error) {
        res.status(error?.status || 500)
           .send({status:'Failed',data:{error: error?.message || error}})
    }
}

module.exports.updateOneWorkout = (req,res) => {
    const {body, params :{workoutId}} = req;
    if(!workoutId){
        res.status(400).send({status:'Failed',data:{error:"Parameter ':workoutId' cannot be empty"}})
    }
    try {
        const updatedWorkout = workoutService.updateOneWorkout(workoutId,body)
        res.send({status:'OK',data:updatedWorkout})
    } catch (error) {
        res.status(error?.status || 500)
           .send({status:'Failed', data:{error: error?.message || error}})    
    }
}

module.exports.deleteOneWorkout = (req,res) => {
    const {body,params:{workoutId}} = req;
    if(!workoutId){
        res.status(400).send({status:'Failed',data:{error:"Parameter ':workoutId' cannot be empty"}})
    }
    try {
        const deletedWorkout = workoutService.deleteWorkout(workoutId);
        res.status(204).send({status:'OK'})
    } catch (error) {
        res.status(error?.status || 500)
           .send({status:'Failed', data:{error: error?.message || error}})
    }
}