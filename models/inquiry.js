const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now()
    }
}, {collection: 'coco'});

module.exports = mongoose.model("Inquiry", inquirySchema, 'inquiry');