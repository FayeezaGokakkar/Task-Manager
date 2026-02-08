const express = require('express');
const connectDB = require('./config/config')
const routes = require('./routes/routes')
const cors =require('cors')


// configuring dotenv
require('dotenv').config();

// connecting mongodb
connectDB();

const app =express();

// route



app.get('/',(req,res)=>{
    res.send('Hello Backend')
})

app.use(cors())
app.use(express.json());
app.use('/api/tasks',routes);


const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server in on ${PORT}`);
})