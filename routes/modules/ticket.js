const express=require('express')
const router=express.Router()
const ticketController=require('../../controller/ticket-controller')

router.get('/',ticketController.getTickets)
router.post('/',ticketController.postTicket)
router.delete('/:id',ticketController.deleteTicket)
router.patch('/:id',ticketController.useTicket)


module.exports=router