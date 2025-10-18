import express from "express";
import notesRoutes from "./Routes/notesRoutes.js";
import cors from "cors";
import path from "path";


import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import ratelimiter from "./middleware/rateLimiter.js";
const app=express();
dotenv.config();

const PORT=process.env.PORT || 5001
const __dirname=path.resolve()

//middleware
if (process.env.NODE_ENV!=="production"){
app.use(cors(  {

  origin:"http://localhost:5173"
  }));
 
}

app.use(express.json());
app.use(ratelimiter);




app.use("/api/notes",notesRoutes);

if (process.env.NODE_ENV === "production") {
  // Serve frontend build
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Catch-all to serve index.html for React routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}



connectDB().then(()=>{


app.listen(PORT,()=>{
    console.log("Server started at port:",PORT)

});
  });



