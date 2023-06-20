const {Ticket,Exhibition,User,Cart}=require('../models')

const ticketController={
  getTickets:(req,res,next)=>{
    const user=req.user
    Ticket.findAll({
      where:{userId:user.id},
      include:[User,Exhibition],
      raw:true,
      nest:true
    })
    .then(tickets=>res.json({status:'success',tickets}))
    .catch(err=>next(err))
  },
  postTicket:async(req,res,next)=>{
    const user=req.user
    const {quantity,exhibitionId,cartId}=req.body

     for(let i=0;i<cartId.length;i++){
      Ticket.create({
      userId:1,
      exhibitionId:exhibitionId[i],
      quantity:quantity[i],
      isUsed:false,
      cartId:cartId[i]
    })
     await Cart.update({userId:1},{where:{id:cartId[i]}})
    }
    return res.json({status:'success'})
  },
  deleteTicket:(req,res,next)=>{
    const id=req.params.id
    Ticket.findByPk(id)
    .then(ticket=>{
      if(!ticket) throw new Error('The ticket is not existed')
      return ticket.destory()
    })
    .then(ticket=>res.json({status:'success',ticket}))
    .catch(err=>next(err))
  },
  useTicket:(req,res,next)=>{
    const id=req.params.id
    Ticket.findByPk(id)
    .then(ticket=>{
      if(!ticket) throw new Error('The ticket is not existed')
      return ticket.update({isUsed:true})
    })
    .then(ticket=>res.json({status:'success',ticket}))
  }
}

module.exports=ticketController