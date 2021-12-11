'use strict';

const {PlayersSchema, PLAYERS_TABLE} = require('./../models/playersModel');
const {TeamsSchema, TEAMS_TABLE} = require('./../models/teamsModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PLAYERS_TABLE, PlayersSchema);
    await queryInterface.createTable(TEAMS_TABLE, TeamsSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PLAYERS_TABLE);
    await queryInterface.dropTable(TEAMS_TABLE);
  }
};
