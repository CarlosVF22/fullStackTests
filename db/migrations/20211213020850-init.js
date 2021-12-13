'use strict';

const {TeamsSchema, TEAMS_TABLE} = require('./../models/teamsModel');
const {PlayersSchema, PLAYERS_TABLE} = require('./../models/playersModel');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TEAMS_TABLE, TeamsSchema);
    await queryInterface.createTable(PLAYERS_TABLE, PlayersSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TEAMS_TABLE);
    await queryInterface.dropTable(PLAYERS_TABLE);
  }
};
