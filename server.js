const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const env = require("dotenv").config();
 const connectDB = require("./connectDb");
const port = process.env.PORT || 5000;
connectDB()

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})