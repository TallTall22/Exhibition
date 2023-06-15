const express=require('express')
const router=express.Router()
const exhibitionController=require('../../controller/exhibition-controller')

router.get('/recent',exhibitionController.getRecentExhibition)

module.exports=router