import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from '../models/JobModel.js'

export const getCurrentUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({ user: userWithoutPassword });
  };
export const getAppilcationStats = async (req,res)=>{
    const users = await User.countDocuments()
    const jobs = await Job.countDocuments()
    res.status(StatusCodes.OK).json({users,jobs})

}
export const UpdateUser = async (req,res)=>{
    const obj = {...req.body}
    delete obj.password
    const UpdateUser = await User.findByIdAndUpdate(req.user.userId,obj)
    res.status(StatusCodes.OK).json({msg:'update user'})

}