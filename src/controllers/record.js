const recordService = require('../services/record');

module.exports.getRecordForWorkout = (req,res) => {
    const {workoutId} = req.params;
        if(!workoutId){
            res.status(400).send({status:'Failed',data:{error:'Parameter ":workoutId" cannot be empty'}})
        }
    try {  
        const record = recordService.getRecordForWorkouts(workoutId);
        res.send({status:'OK', data:record});
    } catch (error) {
        res.status(error?.status || 500)
            .send({message:error?.message || error});
    }
}

module.exports.getRecordForMember = (req,res) => {
    const {workoutId,memberId} = req.params;
    if(!workoutId && !memberId){
        res.status(400).send({status:'Failed', data:{error:'Parameter ":wokoutId or :memberId" cannot be empty'}})
    }
    try {
        
    } catch (error) {
        
    }
}