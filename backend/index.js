const express = require('express');
const cors = require('cors');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { readdirSync } = require("fs");
const csrfProtection = csurf({ cookie: true });
require("dotenv").config();

const app = express();
const port = 5000;

mongoose.connect(process.env.DATABASE).then(()=>console.log("DB connected Successfully")).catch((err)=>console.log(err))

// app.use(cors());
app.use(cors({
    credentials :true,
    origin: ['http://localhost:3000']
}));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json({limit:"5mb"}))

// app.use((req,res,next)=>{
//     console.log("This is my middle ware");
//     next();
// });

readdirSync('./routes').map((item)=>{
    return app.use('/',require(`./routes/${item}`));
})

app.use(csrfProtection);

app.get('/csrf-token',(req,res)=>{
    res.json({csrfToken:req.csrfToken()})
    console.log('jwt hpoooo')
})

app.listen(port,()=>{
    console.log("Our app is running on",port)
})