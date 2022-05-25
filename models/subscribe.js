const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now()
    }
}, {collection: 'coco'});

module.exports = mongoose.model("Subscribe", subscribeSchema, 'subscribe');