import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
// import {validateTest} from './middleware/validationMiddleware.js' demenstration porposies

import {body,validationResult} from 'express-validator'
//routers
import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRouter.js'
//middleware
import errorHandlerMidleware from './middleware/errorHandlerMidleware.js';
import {authenticateUser} from './middleware/authMiddleware.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Merhaba Dostum Neden Aradin?');
});
app.get('/api/v1/test',(req,res)=>{
    res.json({msg:'test route'})
})

app.use('/api/v1/jobs',authenticateUser,jobRouter);
app.use('/api/v1/users', authenticateUser,userRouter);
app.use('/api/v1/auth', authRouter);

app.use('*', (req, res) => {
    res.status(404).json({ msg: "Not Found" });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong" });
});

// app.post('/api/v1/test',validateTest,
// (req,res)=>{
//     const {name} = req.body
//     res.json({message:`hello ${name}`})
// })

app.use(errorHandlerMidleware)
const PORT = process.env.PORT || 5100;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}...`);
        });
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
