// backend/routes/teamRoutes.js
const express = require('express');
const router = express.Router();
const { getTeams } = require('../controllers/teamController');

router.get('/teams', getTeams);

module.exports = router;
