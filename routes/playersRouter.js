const express = require('express');

const PlayersService = require('./../services/playersService');

const router = express.Router();
const service = new PlayersService();

router.get('/', async (req, res) => {
    const players = await service.find();
    res.json(players);
})

module.exports = router;