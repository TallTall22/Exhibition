'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tickets','cart_id',{
      type:Sequelize.INTEGER,
      references:{
        model:'Carts',
        key:'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tickets','cart_id')
  }
};
