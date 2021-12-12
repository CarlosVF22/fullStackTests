'use strict';

const {PlayersSchema, PLAYERS_TABLE} = require('./../models/playersModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(PLAYERS_TABLE, 'team_id',PlayersSchema.teamId);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(PLAYERS_TABLE, 'team_id');
  }
};
