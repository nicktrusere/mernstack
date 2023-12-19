const express = require('express')
const memento = require('../models/mementoModel')
const router = express.Router()
const {getMementos, setMemento, updateMemento, deleteMemento} = require('../controllers/mementoController')


router.route('/:id').delete(deleteMemento).put(updateMemento)

router.post('/', setEvent)
   router.post('/', async (req, res) => {
   const {title, load, reps} = req.body
   try {
        const event = await event.create({title, load, reps})
        res.status(200).json(event)
    } catch (error) {
//        res.status(400).json({error: error.message})
//    }
//})

//router.put('/:id', (req, res) => {
//    res.status(200).json({message: `Update event ${req.params.id}` })
//})
//router.put('/:id', updateEvent)

//router.delete('/:id', (req, res) => {
//    res.status(200).json({message:`Delete event ${req.params.id}` })
//})
//router.delete('/:id', deleteEvent)

module.exports = router
