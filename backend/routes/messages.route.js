const express = require('express');
const router = express.Router();

router.get('/messages/get', require('../controller/messages.controller').getMessages);
router.post('/messages/add', require('../controller/messages.controller').createMessage);

module.exports = router;