import express from "express";
import dbCon from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors';
import routers from "./routes/routes.js";

const app= express();


dbCon();
app.use(cors());
app.use(express.json());
app.use('/api',routers);

app.listen(process.env.PORT,()=>{
    console.log('Server is running.....');
})