import express from "express";
import path from "path";
// const express =require("express");
const app=express(); // instance of your application
app.get('/',(req,res)=>{
    res.send("welcome to root route")
})

app.set('view engine','ejs'); // setting view engine to ejs
app.set('views',path.join(import.meta.dirname,'views')); // setting views folder to ./views
// app.get('/home',(req,res)=>{
//     res.send("welcome to root route home page")
// })
app.get('/priyanshu',(req,res)=>{
    res.render('index'); // rendering ejs file
})
// app.get('*',(req,res)=>{
//     res.send("404 page not found")
// })
const PORT=8080;
app.listen(PORT,()=>{   
    console.log(`server connected at port 1 : ${PORT}`);
    
})