import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import './env_config.js'

const DB_CONNECTION = process.env.DB_CONNECTION
const PORT_SERVER = process.env.PORT_SERVER

const app = express()

app.use(express.json())





















mongoose.connect(DB_CONNECTION)
.then(() => {
    app.listen(PORT_SERVER, () => console.log("Server running on PORT"+ " " + PORT_SERVER + " 👍"))
    console.log("Connected to DB 👍")
})
.catch((err) => console.log(err + "ERROR - not able to connect to DB 👎"))