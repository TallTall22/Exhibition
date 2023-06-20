const express=require('express')
const router=express.Router()
const collectionController=require('../../controller/collection-controller')

router.get('/:id',collectionController.getcollection)
router.get('/',collectionController.getcollections)


module.exports=router