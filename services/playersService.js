const {models} = require('./../libs/sequelize');

class PlayersService {
    constructor(){}

    async create(data) {
        const newPlayer = await models.Players.create(data)
    }
    // async find(){
    //     const res = await models.Players.findAll();
    //     return res;
    // }
}

module.exports = PlayersService;