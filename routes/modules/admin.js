const express = require('express')
const router = express.Router()
const adminController = require('../../controller/admin-controller')


router.get('/collections/create',adminController.createCollection)
router.get('/collections/:id/edit',adminController.editCollection)
router.get('/collections/:id',adminController.getCollection)
router.delete('/collections/:id',adminController.deleteCollection)
router.put('/collections/:id',adminController.putCollection)
router.post('/collections', adminController.postCollection)
router.get('/collections',adminController.getCollections)

module.exports = router