'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Tickets','is_used',{
      type:Sequelize.BOOLEAN,
      defaultValue:false
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tickets','is_used')
  }
};
