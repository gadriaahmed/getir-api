const express = require('express');
const RecordController = require('../controllers/record.controller')


const router = express.Router()

router.post(
    '/records',
    RecordController.records)

module.exports = router;