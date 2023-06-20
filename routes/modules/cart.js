const express=require('express')
const router=express.Router()
const cartController=require('../../controller/cart-controller')

router.get('/',cartController.createCart)
router.post('/',cartController.postCart)
router.delete('/',cartController.deleteCart)
router.put('/:id',cartController.putCart)


module.exports=router