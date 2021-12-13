const {Model, DataTypes, Sequelize} = require('sequelize');

const TEAMS_TABLE = "teams";

const TeamsSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name:{
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Teams extends Model{
    static associate(models) {
        this.hasMany(models.Players, {
            as: 'players',
            foreingKey: 'teamId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TEAMS_TABLE,
            modelName: 'Teams',
            timestamps: false
        }
    }
}

module.exports = {TEAMS_TABLE, TeamsSchema, Teams}