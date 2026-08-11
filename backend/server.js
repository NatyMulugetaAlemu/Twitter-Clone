import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoutes.js"
import connectMONGODB from "./db/connectMONGODB.js"
import dns from "node:dns";
import cookieParser from "cookie-parser"
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app=express()

const PORT=process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)

app.get("/",(req,res)=>{
    res.json({message:"Server is okay"})
})

app.listen(PORT,()=>{
    connectMONGODB()
    console.log(`Server is running on PORT:${PORT}`)
})

