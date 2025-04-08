const http= require('http');
const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    next();
})

app.use('/product-page',(req,res)=>{
    res.send('<h1>Product Page</h1>');
});


app.use('/',(req,res)=>{
    console.log('Processing request');
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000);