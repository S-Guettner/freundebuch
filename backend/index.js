import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import './env_config.js'

/* environment varaibles */
const DB_CONNECTION = process.env.DB_CONNECTION
const PORT_SERVER = process.env.PORT_SERVER
/* express setup */
const app = express()
/* body parser */
app.use(express.json())




















/* DB connection */
mongoose.connect(DB_CONNECTION)
/* running server */
.then(() => {
    app.listen(PORT_SERVER, () => console.log("Server running on PORT"+ " " + PORT_SERVER + " 👍"))
    console.log("Connected to DB 👍")
})
/* check for error */
.catch((err) => console.log(err + "ERROR - not able to connect to DB 👎"))