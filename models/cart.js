'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.hasMany(models.Ticket,{foreignKey:'cartId'})
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER,
    exhibitionId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
    tableName:'Carts',
    underscored: true,
  });
  return Cart;
};