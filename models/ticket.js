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
    }
  }
  Ticket.init({
    user_id: DataTypes.INTEGER,
    exhibition_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ticket',
    underscored: true,
  });
  return Ticket;
};