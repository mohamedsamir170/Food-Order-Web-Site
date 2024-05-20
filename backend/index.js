import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import "./db.js"
import { authRouter } from "../controllers/authController.js"
import { prodRouter } from "..controllers/productController.js"
import { uplRouter } from "..controllers/uploadController.js"
dotenv.config()
const app = express()

//routes & midllewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/images', express.static('../public/images'))
app.use('/auth',authRouter)
app.use('/product',prodRouter)
app.use('/upload',uplRouter)




//start the server 
app.listen(process.env.PORT, () => {
    console.log(`Server is Running on ${process.env.PORT} `);
})