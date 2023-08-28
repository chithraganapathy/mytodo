const express = require('express');
const router = express.Router()

const homeController = require('../controller/homeController')

router.get('/', homeController.getTodo)

router.post('/createTodo', homeController.createTodo)

router.put('/markComplete', homeController.markComplete)

router.put('/markIncomplete', homeController.markIncomplete)

router.delete('/remove', homeController.removeItem)

module.exports = router;