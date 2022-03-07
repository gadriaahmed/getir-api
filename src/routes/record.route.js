const express = require('express');
const RecordController = require('../controllers/record.controller')
const dateValidator = require('../common/validation/dateValidatior');
const countValidator = require('../common/validation/countValidation');


const router = express.Router()

router.post(
    '/records',
    dateValidator.rules(),
    dateValidator.validateDate,
    countValidator.rules(),
    countValidator.validateCount,
    RecordController.records)

module.exports = router;