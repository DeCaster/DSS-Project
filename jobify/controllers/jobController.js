import 'express-async-errors';
import { nanoid } from 'nanoid';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../Errors/customErrors.js';
import Job from '../models/JobModel.js';




//**********************************GetAllJob******************************************
export const getAllJob = async (req, res) => {
    try {
        console.log(req.user);
        const jobs = await Job.find({createdBy:req.user.userId});
        res.status(StatusCodes.OK).json({ jobs });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
};

//********************************CreateJob********************************************
export const createJob = async (req, res) => {
        req.body.createdBy = req.user.userId
        const job = await Job.create(req.body);
        res.status(StatusCodes.CREATED).json({ job });
};

//******************************GetSingleJob*******************************************
export const getSingleJob = async (req, res) => {
        const job = await Job.findById(req.params.id);
        res.status(StatusCodes.OK).json({ job });
};

//*********************************UpdateJob********************************************
export const editJob = async (req, res) => {
    
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(StatusCodes.OK).json({ msg: 'Job modified', job: updatedJob });
};

//***********************************DeleteJob******************************************
export const deleteJob = async (req, res) => {

        const { id } = req.params;
        const removedJob = await Job.findByIdAndDelete(req.params.id);
        res.status(StatusCodes.OK).json({ msg: 'Job Deleted', job: removedJob });
};














//                                        Ilaveler
// let jobs =[
//     {id:nanoid(),company:"apple",position:"front-end"},
//     {id:nanoid(),company:"google",position:"back-end"}
// ]//at this point we need to create route to serv all of this
