'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Exhibitions','end_time',{
      type:Sequelize.STRING
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Exhibitions','end_time')
  }
};
