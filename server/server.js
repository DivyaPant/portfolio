
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolio";

mongoose.connect(MONGO_URI).then(()=>{
   console.log("✅ MongoDB connected")
}).catch((error)=>{
   console.error("❌ MongoDB connection error:", error)
});


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Health check
app.get("/api/health", (req, res)=> {
res.json({ status: "Running", time: new Date().toISOString() });
})

// import Routes

const projectRoutes = require('./routes/project');


// Use Routes

app.use("/api/projects", projectRoutes);

// Start server

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})