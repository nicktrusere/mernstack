const asyncHandler = require('express-async-handler')

const Event = require('../models/eventModel')

//@description - Get event
//@route -       POST /api/events
//@access        Private

const getEvents =  asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get events'})
})

//@description  Set event
//@route        POST /api/events
//@access       Private

const setEvent = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set event'})
})

//@description - Update event
//@route - PUT /api/events/id
//@access Private

const updateEvent = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update event ${req.params.id}` })
})

//@description - Delete event
//@route - DELETE /api/events/:id
//@access Private

const deleteEvent = asyncHandler(async (req, res) => {
    res.status(200).json({message: $`Delete event ${req.params.id}` })
})

module.exports = {
    getEvents,
    setEvent,
    updateEvent,
    deleteEvent,
}
//const setEvent = asyncHandler(async (req, res) => {
//   if (!req.body.text) {
//        res.status(400)
//        throw new Error('Please add a text field')
//    }

//    const event = await Event.create({
//        title: req.body,
//    })

//    res.status(200).json(event)
//})

//const getEvents = asyncHandler(async (req,res) => {
//    const events = await Event.find()

 //   res.status(200).json(events)
//})
