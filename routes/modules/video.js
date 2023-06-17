const express=require('express')
const router=express.Router()
const videoController=require('../../controller/video-controller')

router.get('/',videoController.getVideos)

module.exports=router