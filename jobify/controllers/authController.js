import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import { UnauthenticatedError } from '../Errors/customErrors.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import bcrypt from 'bcryptjs'
import { createJWT } from '../utils/tokenUtils.js';
import { token } from 'morgan';

export const register = async (req, res) => {
    const isFirstAccount = await User.countDocuments() === 0;
    req.body.role = isFirstAccount ? 'admin' : 'user';

    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: 'User created' });
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new UnauthenticatedError('Invalid email');

        const isPasswordCorrect = await comparePassword(req.body.password, user.password);
        if (!isPasswordCorrect) throw new UnauthenticatedError('Invalid password');
        const token = createJWT({userId: user._id , role: user.role})
        const oneDay = 1000*60*60*24
        res.cookie('token',token,{
            httpOnly:true,
            expires: new Date(Date.now()+oneDay),
            secure:process.env.NODE_ENV === 'production'
        })
        res.status(StatusCodes.OK).json({msg:'User Logged In'})


    } catch (error) {
        if (error instanceof UnauthenticatedError) {
            res.status(401).json({ error: error.message });
        } else {
            // Handle other errors (e.g., log them, send a generic error response)
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};


export const logout = (req,res)=>{
    res.cookie('token','logout',{
    httpOnly:true,
    expires:new Date(Date.now()),

});
res.status(StatusCodes.OK).json({msg: 'User Logged out!!!'})
}

