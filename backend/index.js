import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import userRouter from './routes/userRoute.js'
dotenv.config()
import cors from 'cors'
const app=express()
app.use(express.json())
// app.use(cors())
app.use(cors({
  origin: 'https://frontend-frontend-kdqg.onrender.com', // your frontend domain
  credentials: true,
}));
app.get("/",(req,res)=>{
    res.send("api working")
})
app.get("/home",(req,res)=>{
    res.send("deepa")
})
// api ending point
app.use('/api/user',userRouter)
connectDb()
app.listen(process.env.PORT,()=>{
    console.log(`server app running on port ${process.env.PORT}`)
})
