const Workout = require('../routes/workout');
const mongoose = require('mongoose');

//get all workouts
const getworkouts = async(req , res ) => {
    try{
        const all_workout = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(all_workout)
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : e.message})
    }
}

//get a single workout
const getWorkout =  async(req , res ) => {
    const { id } = req.params
    try{
        const workout = await Workout.findById(id)
        res.status(200).json(workout)
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : e.message})
    }
}

//create a new workout
const createWorkout = async (req , res ) => {
    const {title, load , reps} = req.body
    //add dot to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch (e) {
        res.status(400).json({error : e.message})
    }
}

//delete a single workout
const deleteWorkout = async (req , res) => {
    const { id } = req.params
        try{
            const workout = await Workout.findByIdAndDelete(id)
            res.status(200).json(workout)
        }catch(error){
            console.log(error.message)
            res.status(400).json({error : e.message})
        }
}

//update a workout
const updateWorkout = async(req , res ) => {
    const { id } = req.params
    try{
        const workout = await Workout.findByIdAndUpdate({_id : id}, {...req.body})
        res.status(200).json(workout)
    }catch(error){
        console.log(error.message)
        res.status(400).json({error : e.message})
    }
}

module.exports = {
    getworkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}