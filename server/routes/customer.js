const express = require('express')
const router = express.Router()

const customerController = require('../controllers/customer')

router.get('/',customerController.getAllCustomer)

module.exports = router