import express from "express";
// const express =require("express");
const app=express(); // instance of your application
app.get('/',(req,res)=>{
    res.send("welcome to root route")
})
app.get('/home',(req,res)=>{
    res.send("welcome to root route home page")
})

const PORT=8080;
app.listen(PORT,()=>{
    console.log(`server connected at port 1 : ${PORT}`);
    
})