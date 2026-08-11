import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"
import connectMONGODB from "./db/connectMONGODB.js"
import dns from "node:dns";
import cookieParser from "cookie-parser"
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const app=express()
app.use(express.json({ limit: "5mb" })); 
app.use(express.urlencoded({ extended: true })); 

const PORT=process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

app.get("/",(req,res)=>{
    res.json({message:"Server is okay"})
})

app.listen(PORT,()=>{
    connectMONGODB()
    console.log(`Server is running on PORT:${PORT}`)
})

