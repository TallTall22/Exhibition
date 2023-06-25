'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.User,{foreignKey:'userId'})
      Ticket.belongsTo(models.Exhibition,{foreignKey:'exhibitionId'})
    }
  }
  Ticket.init({
    userId: DataTypes.INTEGER,
    exhibitionId: DataTypes.INTEGER,
    isUsed:DataTypes.BOOLEAN,
    quantity:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
    tableName:'Tickets',
    underscored: true,
  });
  return Ticket;
};