import express from "express"
import dotenv from "dotenv"
dotenv.config()
import authRoutes from "./routes/authRoutes.js"

const app=express()

const PORT=process.env.PORT

app.use("/api/auth",authRoutes)

app.get("/",(req,res)=>{
    res.json({message:"Server is okay"})
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT:${PORT}`)
})