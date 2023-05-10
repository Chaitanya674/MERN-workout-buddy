const express = require('express');
const {
    getworkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
} = require("../controllers/workoutcontroller")


const router = express.Router();

//Get all workouts in the application 
router.get('/', getworkouts)

// Get a single workout 
router.get('/:id', getWorkout)

//post a single workout 
router.post('/' , createWorkout)

//DELETE a single workout
router.delete('/:id', deleteWorkout)

//Update a single workout
router.patch('/:id', updateWorkout)

module.exports = router