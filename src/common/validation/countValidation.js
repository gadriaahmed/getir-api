const {body,validationResult} = require("express-validator");
const ValidationError = require("../exceptions/ValidationError");

const rules = () => {
    return [
        body('minCount').trim().customSanitizer((value) => parseInt(value)).isNumeric({ min:0 }),
        body('maxCount').trim().customSanitizer((value) => parseInt(value)).isNumeric({ min:0 }).custom((maxCount,{req})=>{
            if(maxCount > req.body.minCount) return true
            return false;
        })
    ]
}

const validateCount = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return new ValidationError(res,2,'MinCount is greater than MaxCount')
    }
    next();
}

module.exports= {
    rules,
    validateCount
}