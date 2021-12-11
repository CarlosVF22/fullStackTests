const {models} = require('./../libs/sequelize');

class TeamsService {
    async find(){
        const res = await models.Teams.findAll();
        return res;
    }
}

module.exports = TeamsService;