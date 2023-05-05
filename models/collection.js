'use strict'
const {
  Model
} = require('sequelize')
const exhibition = require('./exhibition')
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Collection.belongsTo(models.Exhibition, { foreignKey: 'exhibitionId' })
    }
  }
  Collection.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    slogan: DataTypes.STRING,
    artMaker: DataTypes.STRING,
    description: DataTypes.TEXT,
    artRemark: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collection',
    tableName: 'Collections',
    underscored: true
  })
  return Collection
}
