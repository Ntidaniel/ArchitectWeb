// backend/models/Team.js
const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    socials: [
        {
            icon: String,
            link: String,
        }
    ],
});

module.exports = mongoose.model('Team', teamSchema);
