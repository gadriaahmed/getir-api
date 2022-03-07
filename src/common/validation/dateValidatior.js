const { body, validationResult } = require('express-validator');
const ValidationError = require('../exceptions/ValidationError')
const rules = () => {
    return [
        body('startDate').trim().isDate({format:'YYYY-MM-DD'}),
        body('endDate').trim().isDate({format:'YYYY-MM-DD'}).custom((endDate,{req}) => {
            const start = new Date(req.body.startDate);
            const end = new Date(endDate);
            if(start <= end) return true;
            return false;
        })
    ];
}
const validateDate = (req,res,next) => {
    const  errors = validationResult(req);
    if(!errors.isEmpty()){
        return new ValidationError(res,2,'Start Date should be before the End Date');
    }
    next();
}

module.exports = {
    rules,validateDate
}