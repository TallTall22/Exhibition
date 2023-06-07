'use strict';

const axios=require('axios')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  const NP_MUSEUM_API_KEY = process.env.NP_MUSEUM_API_KEY

    const response= await axios.get('https://openapi.npm.gov.tw/v1/rest/videos/search?limit=9&offset=2&lang=cht', { headers: { apiKey: NP_MUSEUM_API_KEY } })
    const data=await response.data.result
    const videos=data.map(({Serial_No,...rest})=>rest)
    const videoList=await videos.map(v=>({
      name: v.VideoName,
      description: v.VideoDescription,
      issue_date: v.IssueDate,
      video_url: v.VideoUrl,
      created_at: new Date(),
      updated_at: new Date()
    }))
    await queryInterface.bulkInsert('Videos',videoList,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Videos',{})
  }
};
