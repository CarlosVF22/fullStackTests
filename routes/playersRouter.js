const express = require('express');

const PlayersService = require('./../services/playersService');
// const { createPlayerSchema, updatePlayerSchema, getPlayerSchema } = require('./../schemas/playersSchema');

const router = express.Router();
const service = new PlayersService();

router.post('/',)

// router.get('/', async (req, res) => {
//     const players = await service.find();
//     res.json(players);
// })

module.exports = router;