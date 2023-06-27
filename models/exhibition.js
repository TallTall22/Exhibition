'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exhibition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Exhibition.hasMany(models.Collection, { foreignKey: 'exhibitionId' })
      Exhibition.hasMany(models.Ticket, { foreignKey: 'exhibitionId' })

    }
  }
  Exhibition.init({
    name: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    openTime: DataTypes.STRING,
    location: DataTypes.STRING,
    fare: DataTypes.STRING,
    description: DataTypes.TEXT,
    image:DataTypes.STRING,
    endTime:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exhibition',
    tableName: 'Exhibitions',
    underscored: true,
  });
  return Exhibition;
};