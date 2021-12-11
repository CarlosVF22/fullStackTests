const {Players, PlayersSchema} = require('./playersModel');
const {Teams, TeamsSchema} = require('./teamsModel');


function setupModels(sequelize){
    Players.init(PlayersSchema, Players.config(sequelize));
    Teams.init(TeamsSchema, Teams.config(sequelize));

    Teams.associate(sequelize.models);
    Players.associate(sequelize.models);
}

module.exports = setupModels;