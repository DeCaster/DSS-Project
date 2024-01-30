import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/contants.js";


//Burada ben JobSchema tanimlayiram onun icinde aranacak datalari yaziram 
const JobSchema = new mongoose.Schema({
    company:String,
    position:String,
    jobStatus:{
        type:String,
        enum: Object.values(JOB_STATUS),
        default:'panding'
    },
    jobType:{
        type:String,
        enum:Object.values(JOB_TYPE),
        default:JOB_TYPE.FULL_TIME
    },
    jobLocation:{
        type:String,
        default:'my city'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    }
},
{timestamps:true}//buda alta vaxt bilgisin ekler
);


export default mongoose.model('Job',JobSchema)