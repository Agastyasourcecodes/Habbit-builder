import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import cors from "cors";


import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import ratelimiter from "./middleware/rateLimiter.js";
const app=express();
dotenv.config();

const PORT=process.env.PORT || 5001

//middleware
app.use(cors(  {

  origin:"http://localhost:5173"
  }));

app.use(express.json());
app.use(ratelimiter);




app.use("/api/notes",notesRoutes);


connectDB().then(()=>{


app.listen(PORT,()=>{
    console.log("Server started at port:",PORT)

});
  });



