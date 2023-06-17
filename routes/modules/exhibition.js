const express=require('express')
const router=express.Router()
const exhibitionController=require('../../controller/exhibition-controller')

router.get('/recent',exhibitionController.getRecentExhibition)
router.get('/',exhibitionController.getExhibitions)

module.exports=router