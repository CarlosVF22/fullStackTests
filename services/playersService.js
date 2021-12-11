const {models} = require('./../libs/sequelize');

class PlayersService {
    async find(){
        const res = await models.Players.findAll();
        return res;
    }
}

module.exports = PlayersService;