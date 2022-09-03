const express = require('express');
const workoutController = require('../../controllers/workout');
const recordController = require('../../controllers/record');

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a workout
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: "#/components/schemas/Workout"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

const router = express.Router();

router.get('/',workoutController.getAllWorkouts);

router.get('/:workoutId',workoutController.getOneWorkout);

router.get('/:workoutId/records',recordController.getRecordForWorkout)

router.post('/',workoutController.createNewWorkout);

router.patch('/:workout:Id', workoutController.updateOneWorkout);

router.delete('/:workoutId',workoutController.deleteOneWorkout);

module.exports = router;