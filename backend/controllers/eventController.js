const asyncHandler = require('express-async-handler')

const Event = require('../models/eventModel')

const getEvents = asyncHandler(async (req,res) => {
    const events = await Event.find()

    res.status(200).json(events)
})

const setEvent = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const event = await Event.create({
        title: req.body,
    })

    res.status(200).json(event)
})