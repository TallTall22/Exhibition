const {Cart}=require('../models')

const cartController={
  createCart:(req,res,next)=>{
    const user=req.user
    Cart.findAll({
      where:{userId:user.id}
    })
    .then(cart=>res.json({status:'success',cart}))
    .catch(err=>next(err))
  },
  postCart:(req,res,next)=>{
    const user=req.user
    const {exhibitionId}=req.body
    Cart.findOne({
      where:{
        userId:user.id,
        exhibitionId
      }
    })
    .then(cart=>{
      if(cart) return;
      return Cart.Create({
        userId:user.id,
        exhibitionId,
        quantity:1
      })
    })
  },
  putCart:(req,res,next)=>{
    const user=req.user
    const {exhibitionId,quantity}=req.body
    Cart.findOne({
      where:{
        userId:user.id,
        exhibitionId
      }
    })
    .then(cart=>{
      cart.update({
        user:user.id,
        exhibitionId,
        quantity
      })
    })
  },
  deleteCart:(req,res,next)=>{
    const user=req.user
    const {exhibitionId}=req.body
    Cart.findOne({
      where:{
        userId:user.id,
        exhibitionId
      }
    })
    .then(cart=>{
      return cart.destory()
    })
    .catch(err=>next(err))
  }
}

module.exports=cartController