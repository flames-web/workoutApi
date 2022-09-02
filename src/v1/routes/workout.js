const express = require('express');
const workoutController = require('../../controllers/workout');
const router = express.Router();

router.get('/',workoutController.getAllWorkouts);

router.get('/:workoutId', (req,res) => {
    res.send('Get an existing workout');
})

router.post('/',workoutController.createNewWorkout);

router.patch('/:workout:Id', (req,res) => {
    res.send('Update an existing workout')
})

router.delete(':workoutId', (req,res) => {
    res.send('Delete an existing user')
})

module.exports = router;