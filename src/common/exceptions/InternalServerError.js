class InternalServerError extends Error {
    constructor(args) {
        super(args);
        this.name = this.constructor.name;
        this.status = 500;
    }
}
module.exports = InternalServerError;