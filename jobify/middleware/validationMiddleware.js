import { body, param, validationResult } from 'express-validator';
import { BadRequestError, NotFoundError, UnauthenticatedError, UnauthorizedError } from '../Errors/customErrors.js';
import { JOB_STATUS, JOB_TYPE, JOB_STORY_BY } from '../utils/contants.js';
import mongoose from 'mongoose';
import Job from '../models/JobModel.js';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        async (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);

                // Check if the error message indicates a missing job
                if (errorMessages.some(msg => msg.startsWith('No job'))) {
                    throw new NotFoundError(errorMessages);
                }
                if(errorMessages[0].startsWith('not authorized')){
                    throw new UnauthorizedError('not authorized to access this route')
                }

                return res.status(400).json({ errors: errorMessages });
            }

            next();
        },
    ];
};

export const validateJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('Company is required'),
    body('position').notEmpty().withMessage('Position is required'),
    body('jobLocation').notEmpty().withMessage('Job location is required'),
    body('jobStatus')
        .isIn(Object.values(JOB_STATUS))
        .withMessage('Invalid status value'),
    body('jobType')
        .isIn(Object.values(JOB_TYPE))
        .withMessage('Invalid type value'),
]);

export const validateIdParam = withValidationErrors([
    param('id')
        .custom(async (value,{req}) => {
            const isValidId = mongoose.Types.ObjectId.isValid(value);

            if (!isValidId) {
                throw new NotFoundError(`No job with id ${value}`);
            }

            const job = await Job.findById(value);

            if (!job) {
                throw new NotFoundError(`No job with id ${value}`);
            }
            const isAdmin = req.user.role ==='admin'
            const isOwner = req.user.userId === job.createdBy.toString()
            if(!isAdmin && !isOwner) throw new UnauthorizedError('not authorized to acess this route')
        }),
]);

export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });

            if (user) {
                throw new BadRequestError('Email already exists');
            }

            // Return true to indicate successful validation
            return true;
        }),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('lastName').notEmpty().withMessage('last name is required'),
]);


export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    body('password')
        .notEmpty().withMessage('Password is required'),

]);


export const validateUpdateUserInput = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user && user._id.toString() !== req.user.userId) {
                throw new BadRequestError('Email already exists');
            }
        }),
    body('location').notEmpty().withMessage('Location is required'),
    body('lastName').notEmpty().withMessage('last name is required'),

])
