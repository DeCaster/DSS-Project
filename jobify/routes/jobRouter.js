import { Router } from "express";
const router = Router();

import {
    getAllJob,
    getSingleJob,
    createJob,
    editJob,
    deleteJob
} 
from '../controllers/jobController.js';
import { validateJobInput, validateIdParam} from "../middleware/validationMiddleware.js";


router.route('/')
    .get(getAllJob)
    .post(validateJobInput,createJob);

router.route('/:id')
    .get(validateIdParam,getSingleJob)
    .patch(validateJobInput,validateIdParam,editJob)
    .delete(validateIdParam,deleteJob);

export default router;
 