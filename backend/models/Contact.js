// backend/models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Contact', contactSchema);
