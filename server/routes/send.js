const express = require('express')
const router = express.Router()
const sendEmail = require('../services/SendgridService')

router.post('/send', (req, res) => {
  const email = req.body
  sendEmail(email, res)
})

module.exports = router