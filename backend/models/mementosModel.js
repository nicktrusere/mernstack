const mongoose = require('mongoose')

const mementoSchema = new mongoose.Schema(
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
        city: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            required: true
        }
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Mementos', mementoSchema);
