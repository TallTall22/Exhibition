const {Video}=require('../models')

const videoController={
  getVideos:(req,res,next)=>{
    Video.findAll({
      order:[['name','asc']],
      raw:true,
      next:true
    })
    .then(videos=>res.json({status:'success',videos}))
  }
}

module.exports=videoController