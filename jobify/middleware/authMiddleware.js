import { UnauthenticatedError, UnauthorizedError } from "../Errors/customErrors.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = (req,res,next) =>{
    const {token}=req.cookies
    if(!token) throw new UnauthenticatedError('unauthentication Error')

    try {
        const {userId,role} = verifyJWT(token)
        req.user = {userId,role}
        next()
    } catch(error){
        throw new UnauthenticatedError('unauthentication Error')
    }
}


export const authorizePermissions = (...roles)=>{
    console.log(roles);
    return (req,res,next)=>{
        if(!roles.includes(req.user.role))
        throw new UnauthorizedError('Unauthorized to access this route')
        next();
    }
}