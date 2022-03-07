class ValidationError {
    constructor(res,code,msg) {
       res.status(422).json({code:code,msg:msg});
    }
}
module.exports = ValidationError;