const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const env = require("dotenv").config();
 
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})