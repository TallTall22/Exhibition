const {Ticket,Exhibition}=require('../models')

const ticketController={
  getTickets:(req,res,next)=>{
    const user=req.user
    Ticket.findAll({
      where:{userId:user.id},
      include:Exhibition,
      raw:true,
      nest:true
    })
    .then(tickets=>res.json({status:'success',tickets}))
    .catch(err=>next(err))
  },
  postTicket:(req,res,next)=>{
    const user=req.user
    const {quantity}=req.body
    const exhibitionId=req.params.id
    return Ticket.create({
      userId:user.id,
      exhibitionId,
      quantity,
      isUsed:false,
    })
    .then(ticket=>res.json({status:'success',ticket}))
    .catch(err=>next(err))
  },
  deleteTicket:(req,res,next)=>{
    const id=req.params.id
    Ticket.findByPk(id)
    .then(ticket=>{
      if(!ticket) throw new Error('The ticket is not existed')
      return ticket.destroy()
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
    .catch(err=>next(err))
  },
  getExhibitions:(req,res,next)=>{
    const user=req.user
    Exhibition.findAll({
      raw:true,
      nest:true
    })
    .then(exhibitions=>res.json({status:'success',exhibitions,user}))
    .catch(err=>next(err))
  },
  getExhibition:(req,res,next)=>{
    const id=req.params.id
    const user=req.user
    Exhibition.findByPk(id,{
      raw:true,
      nest:true
    })
    .then(exhibition=>res.json({status:'success',exhibition,user}))
    .catch(err=>next(err))
  }
}

module.exports=ticketController