'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories',
    ['圖書','文獻','書法','玉器','珍玩','繪畫','銅器','陶瓷']
    .map(item=>{
      return {
      name:item,
      created_at: new Date(),
      updated_at: new Date()
    }}),{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories',{})
  }
};
