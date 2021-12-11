const express = require('express');

const TeamsService = require('./../services/teamsService');

const router = express.Router();
const service = new TeamsService();

router.post('/', async (req, res) => {
    const teams = await service.find();
    res.json(teams);
})

module.exports = router;