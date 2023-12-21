const asyncHandler = require('express-async-handler')

const memento = require('../models/mementosModel')

//@description - Get event
//@route -       POST /api/events
//@access        Private

const getMementos =  asyncHandler(async (req, res) => {
    const mementos = await memento.find()

    res.status(200).json(trips)
})

//@description  Set memento
//@route        POST /api/memento
//@access       Private

const setMemento = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const memento = await Memento.create({
        text: req.body.text,
    })
    
    res.status(200).json({message: 'Set Memo'})
})

//@description - Update event
//@route - PUT /api/events/id
//@access Private

const updateMemento = asyncHandler(async (req, res) => {
    const memento = await Memento.findById(req.params.id)

    if (!memento) {
        res.status(400)
        throw new Error('Memo not found')
    }

    const updateMemento = await Memento.findByIdAndUpdate(req.params.id, req.
        body, {
        new: true,
    })
    
    res.status(200).json(updatedMemento)
})

//@description - Delete event
//@route - DELETE /api/events/:id
//@access Private

const deleteEvent = asyncHandler(async (req, res) => {
    const memento = await Memento.findById(req.params.id)
    
    if (!memento) {
        res.status(400)
        throw new Error('Memo not found')
    }

    await memento 

    res.status(200).json({message: $`Delete memento ${req.params.id}` })
})

module.exports = {
    getMementos,
    setMemento,
    updateMemento,
    deleteMemento,
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
