import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import contactModel from './models/contactModel.js'
import './env_config.js'

/* environment varaibles */
const DB_CONNECTION = process.env.DB_CONNECTION
const PORT_SERVER = process.env.PORT_SERVER

/* express setup */
const app = express()
/* body parser */
app.use(express.json())
/* cors setup */
app.use(cors(
    {
        origin: '*',
        methods:['GET','POST','DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false,
        optionsSuccessStatus: 200
    }
))


/* route to create new contact */
app.post('/api/v1/new-contact' , async (req,res) => {
    try {
        const data = await contactModel.create(req.body)
        res.status(200).json(data)
    } catch (err) {
        console.log(req.body)
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})

/* route to get contacts */
app.get('/api/v1/contacts' , async (req,res) => {
    try {
        const data = await contactModel.find()
        res.status(200).json(data)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})

/* route to delete contact */
app.delete('/api/v1/contacts' , async (req,res) => {
    try {
        const data = await contactModel.findByIdAndDelete(req.body.id)
        res.status(200).json(data)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
})












/* DB connection */
mongoose.connect(DB_CONNECTION)
/* running server */
.then(() => {
    app.listen(PORT_SERVER, () => console.log("Server running on PORT"+ " " + PORT_SERVER + " 👍"))
    console.log("Connected to DB 👍")
})
/* check for error */
.catch((err) => console.log(err + "ERROR - not able to connect to DB 👎"))