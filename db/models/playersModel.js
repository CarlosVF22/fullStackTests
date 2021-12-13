const { Model, DataTypes, Sequelize } = require('sequelize');

const { TEAMS_TABLE } = require('./teamsModel');

const PLAYERS_TABLE = "players";

const PlayersSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    position: {
        allowNull: false,
        type: DataTypes.STRING
    },
    nationality: {
        allowNull: false,
        type: DataTypes.STRING
    },
    teamName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    teamId: {
        field: 'teamId',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: TEAMS_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Players extends Model {
    static associate(models) {
        this.belongsTo(models.Teams, {as:'Teams'});
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PLAYERS_TABLE,
            modelName: 'Players',
            timestamps: false
        }
    }
}

module.exports = { PLAYERS_TABLE, PlayersSchema, Players }