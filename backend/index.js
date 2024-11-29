import express from "express";
import cookie from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from "./utils/db.js";
import userRoute from './routes/user.routes.js'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'
import applicationRoute from './routes/application.route.js'

dotenv.config({})

const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookie());
const corsOption = {
  origin: ["http://localhost:5173","https://new-job-vista-tushar.vercel.app"],
  credentials: true,
}
app.use(cors(corsOption))

const PORT =process.env.PORT || 1000;

//api's
// http://localhost:8000/
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute); 
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, ()=>{
  connectDB();
  console.log(`Server Started ${PORT}`);
})