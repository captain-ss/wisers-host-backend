const express = require('express');
const cors = require('cors');
const apiRoutes = require('./router/api');
const connectDb = require("./ConnectDb/Db");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

app.use('/api', apiRoutes);
app.use("/",(req,res )=>{
    res.send("home page")
})



const port = process.env.PORT || 3005;
const start = async () => {
  try {
    const res = await connectDb(process.env.MONGODB_URI);
    app.listen(port, console.log(`you server lishening in port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();