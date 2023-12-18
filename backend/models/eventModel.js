const mongoose = require('mongoose')

const eventSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
        type: String,
        required: [true, 'Please add text value'],
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, 
{
    timestamps: true,
 }
)

module.exports = mongoose.model('Event', eventSchema)
