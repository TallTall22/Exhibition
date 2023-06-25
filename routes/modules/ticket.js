const express=require('express')
const router=express.Router()
const ticketController=require('../../controller/ticket-controller')

router.get('/all',ticketController.getExhibitions)
router.get('/:id',ticketController.getExhibition)
router.delete('/:id',ticketController.deleteTicket)
router.patch('/:id',ticketController.useTicket)
router.post('/:id',ticketController.postTicket)
router.get('/',ticketController.getTickets)


module.exports=router