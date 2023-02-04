export default class NotImplementedException extends Error {
    constructor(message) {
        super(`the "${message}" function wasn't implemented`)
        this.name = "NotImplementedException"
    }
}