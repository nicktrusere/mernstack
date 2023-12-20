const mongoose = require('mongoose')

const mementoSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        memento: {
        type: String,
        required: [true, 'Please add text value'],
        },
        image: {
        type: String,
        required: true
        },
        text: 
        {
        type: String,
        required: true
        },
        text: {
        type: String,
        required: true
        },
        reps: {
        type: Number,
        required: true
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Mementos', mementoSchema);
