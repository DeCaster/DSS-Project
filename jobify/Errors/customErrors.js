import { StatusCodes } from "http-status-codes";
export class NotFoundError extends Error{
    constructor(message){
        this.name = 'NotFoundError'
        super(message)
        this.StatusCodes = StatusCodes.NOT_FOUND
    }
}

export class BadRequestError extends Error{
    constructor(message){
        this.name = 'BadRequestError'
        super(message)
        this.StatusCodes = StatusCodes.BAD_REQUEST
    }
}
export class UnauthenticatedError extends Error {
    constructor(message) {
        super(message); // super constructor'ı çağır
        this.name = 'UnauthenticatedError'; // name özelliğini belirt (eğer gerekliyse)
    }
}
export class UnauthorizedError extends Error{
    constructor(message){
        this.name = 'UnauthorizedError'
        super(message)
        this.StatusCodes = StatusCodes.FORBIDDEN
    }
}
