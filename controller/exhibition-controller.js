const { Op } = require('sequelize')
const {Exhibition}=require('../models')

const exhibitionController={
  getRecentExhibition:(req,res,next)=>{
    Exhibition.findAll({
      where:{
        startDate:{
          [Op.not]:null
        }
      },
      limit:3,
      raw:true,
      nest:true
    })
    .then(recentExhibition=>res.json({status:'success',exhibitions:recentExhibition}))
    .catch(err=>next(err))
  }
}

module.exports=exhibitionController