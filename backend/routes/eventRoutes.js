const express = require('express')
const event = require('../models/eventModel')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'Get events'})
})

router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
    
    try {
        const event = await event.create({title, load, reps})
        res.status(200).json(event)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update event ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message:`Delete event ${req.params.id}` })
})

module.exports = router